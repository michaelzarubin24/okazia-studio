import {defineField, defineType} from 'sanity'

export const quizStatsType = defineType({
  name: 'quizStats',
  title: 'Quiz Statistics',
  type: 'document',
  // This makes it a "Singleton" in the UI (optional, but good for organization)
  fields: [
    defineField({
      name: 'totalPlays',
      title: 'Total Games Played',
      type: 'number',
      initialValue: 0,
      readOnly: true // Only editable via API
    }),
    defineField({
      name: 'characterCounts',
      title: 'Results Breakdown',
      type: 'object',
      description: 'How many times each character was the result',
      fields: [
        {name: 'A', type: 'number', title: 'Мавка (A)', initialValue: 0},
        {name: 'B', type: 'number', title: 'Чугайстер (B)', initialValue: 0},
        {name: 'C', type: 'number', title: 'Повітруля (C)', initialValue: 0},
        {name: 'D', type: 'number', title: 'Сновида (D)', initialValue: 0},
        {name: 'E', type: 'number', title: 'Відьма (E)', initialValue: 0},
        {name: 'F', type: 'number', title: 'Вовкулака (F)', initialValue: 0},
        {name: 'G', type: 'number', title: 'Мольфар (G)', initialValue: 0},
        {name: 'H', type: 'number', title: 'Купала (H)', initialValue: 0},
      ]
    })
  ],
  preview: {
    select: {
      plays: 'totalPlays'
    },
    prepare({ plays }) {
      return {
        title: 'Quiz Statistics',
        subtitle: `Total Plays: ${plays || 0}`
      }
    }
  }
})