import {defineField, defineType} from 'sanity'

export const musicReleaseType = defineType({
  name: 'musicRelease',
  title: 'Music Release',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (rule) => rule.required().integer().positive(),
    }),
    defineField({
      name: 'title',
      title: 'Release Title',
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
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'artwork',
      title: 'Official Artwork (3000x3000)',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'bannerImage',
      title: 'Banner Image (2560x496)',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    // UPDATED: This is now a list of references to your 'track' documents.
    defineField({
      name: 'tracks',
      title: 'Tracks',
      description: 'Add one track for a single, or multiple for an EP/album.',
      type: 'array',
      of: [{type: 'reference', to: {type: 'track'}}],
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'smartLink',
        title: 'Smart Link URL',
        type: 'url',
        validation: (rule) => rule.required(),
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'releaseDate',
      media: 'artwork',
    },
  },
})