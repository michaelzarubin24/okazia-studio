import {defineField, defineType} from 'sanity'

export const merchProductType = defineType({
  name: 'merchProduct',
  title: 'Merch Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Enter the price in your local currency (e.g., 800).',
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      description: 'Upload one or more photos of the product.',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}], // Enables the rich text editor
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'imageGallery.0', // Shows the first image in the gallery as the preview
    },
    prepare({title, subtitle, media}) {
        return {
            title,
            subtitle: subtitle ? `₴${subtitle}` : 'Price not set',
            media,
        }
    }
  },
})