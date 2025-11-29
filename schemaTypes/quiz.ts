import {defineField, defineType} from 'sanity'

const characterOptions = [
  { title: 'Мавка (A)', value: 'A' },
  { title: 'Чугайстер (B)', value: 'B' },
  { title: 'Повітруля (C)', value: 'C' },
  { title: 'Сновида (D)', value: 'D' },
  { title: 'Відьма (E)', value: 'E' },
  { title: 'Вовкулака (F)', value: 'F' },
  { title: 'Мольфар (G)', value: 'G' },
  { title: 'Купала (H)', value: 'H' },
]

export const quizType = defineType({
  name: 'quiz',
  title: 'Quiz',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Quiz Title',
      type: 'string',
      initialValue: 'Who are you from our songs?',
    }),
    defineField({
      name: 'description',
      title: 'Quiz Description',
      description: 'A short intro or teaser for the quiz.',
      type: 'text',
    }),
    defineField({
      name: 'results',
      title: 'Possible Results (Characters)',
      description: 'Define the 8 possible outcomes here.',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'resultId',
            title: 'Result Character',
            type: 'string',
            options: { list: characterOptions },
            validation: (Rule) => Rule.required(),
          },
          {name: 'characterName', type: 'string', title: 'Character Name'},
          {name: 'image', type: 'image', options: {hotspot: true}, title: 'Character Image'},
          
          // --- NEW RINGTONE FIELD ---
          {
            name: 'ringtone',
            title: 'Character Ringtone (Audio)',
            type: 'file',
            options: {
              accept: 'audio/*' // Limit uploads to audio files
            }
          },
          // --------------------------

          {name: 'description', type: 'text', title: 'Description/Message'},
        ]
      }]
    }),
    defineField({
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'questionText', type: 'string', title: 'Question'},
          {
            name: 'answers',
            title: 'Answers',
            type: 'array',
            of: [{
              type: 'object',
              fields: [
                {name: 'answerText', type: 'string', title: 'Answer Text'},
                {
                  name: 'pointsTo', 
                  title: 'Points To Character', 
                  description: 'Which character does this answer lead to?',
                  type: 'string',
                  options: { list: characterOptions },
                  validation: (Rule) => Rule.required(),
                }
              ]
            }],
            validation: (Rule) => Rule.required().min(2).max(4)
          }
        ]
      }]
    }),
  ],
})