import {defineField, defineType} from 'sanity'

export const trackType = defineType({
  name: 'track',
  title: 'Track',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Track Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutSong',
      title: 'About the Song',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'aboutInstrumental',
      title: 'About the Instrumental',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'lyrics',
      title: 'Lyrics',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})