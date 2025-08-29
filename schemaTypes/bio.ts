import {defineField, defineType} from 'sanity'

export const bioType = defineType({
  name: 'bio',
  title: 'Band Biography',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Our Story',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'The main hero image for the biography page.',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'textContent',
      title: 'Biography Text',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photoGallery',
      title: 'Photo Gallery',
      type: 'array',
      description: 'Upload a collection of photos for the biography page.',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
})