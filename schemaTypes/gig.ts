import {defineField, defineType} from 'sanity'

export const gigType = defineType({
  name: 'gig',
  title: 'Gig',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Gig Title',
      description: 'e.g. "OKAZIA Solo Concert"',
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
      name: 'date',
      title: 'Date of Gig',
      type: 'datetime',
      options: {
        dateFormat: 'DD.MM.YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'ticketsUrl',
      title: 'Tickets URL',
      description: 'Optional: Link to buy tickets online.',
      type: 'url',
    }),
    defineField({
      name: 'detailsUrl',
      title: 'Details URL',
      description: 'Optional: Link to an Instagram post, etc., if no online tickets are available.',
      type: 'url',
    }),
    defineField({
      name: 'mainImageUrl',
      title: 'Main Image',
      description: 'The main hero image for the gig page.',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'posterImageUrl',
      title: 'Poster Image',
      description: 'The poster image for the gig.',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'setlist',
      title: 'Setlist',
      type: 'text',
    }),
    defineField({
      name: 'interestingFacts',
      title: 'Interesting Facts / Memories',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'photoGallery',
      title: 'Photo Gallery',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Video URL',
      description: 'Optional: Link to a YouTube video from the gig.',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'mainImageUrl',
    },
  },
})