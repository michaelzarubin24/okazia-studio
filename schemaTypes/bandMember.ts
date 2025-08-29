// FILE: studio-okazia/schemaTypes/bandMember.ts

import {defineField, defineType} from 'sanity'

export const bandMemberType = defineType({
  name: 'bandMember',
  title: 'Band Member',
  type: 'document',
  fields: [
    // NEW: Added an 'order' field for sorting
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'A number to sort the members by (e.g., 1, 2, 3, 4). Lower numbers appear first.',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'role',
        title: 'Role',
        type: 'string',
        description: 'e.g., Vocals, Guitar',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})