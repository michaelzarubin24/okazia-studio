// FILE: studio-okazia/schemaTypes/homePage.ts

import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  // This makes it a singleton so you can't create multiple home pages
  // Note: You might need to configure this in desk structure for full singleton behavior, 
  // but for now, just don't create more than one!
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title (Internal Use)',
      type: 'string',
      initialValue: 'Home Page Content',
      readOnly: true,
    }),

    // --- HERO SECTION ---
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'mainImage', title: 'Main Background Image', type: 'image', options: {hotspot: true}},
        {name: 'logo', title: 'Band Logo', type: 'image'},
        {name: 'tagline', title: 'Tagline', type: 'string', description: 'e.g. МУЗИЧНА ОКАЗІЯ З ХАРКОВА'},
        {name: 'supportLink', title: 'Support Link (Monobank jar)', type: 'url'},
        {name: 'supportButtonText', title: 'Support Button Text', type: 'string', initialValue: 'ПІДТРИМАТИ'},
      ],
      options: {collapsible: true, collapsed: false}
    }),

    // --- SECTION TITLES ---
    defineField({
      name: 'sectionTitles',
      title: 'Section Titles',
      type: 'object',
      fields: [
        {name: 'futureGigsTitle', title: 'Future Gigs Title', type: 'string', initialValue: 'АНОНСИ'},
        {name: 'musicTitle', title: 'Music Section Title', type: 'string', initialValue: 'МУЗИКА'},
        {name: 'videoTitle', title: 'Video Section Title', type: 'string', initialValue: 'ВІДЕО'},
        {name: 'newsTitle', title: 'News Section Title', type: 'string', initialValue: 'ІНШІ НОВИНИ'},
      ],
      options: {collapsible: true, collapsed: true}
    }),

    // --- VIDEO SECTION ---
    defineField({
      name: 'videoSection',
      title: 'Main Video Section',
      type: 'object',
      fields: [
        {name: 'videoUrl', title: 'Main Video File', type: 'file', description: 'Upload your .mp4 background video here'},
        {name: 'title', title: 'Video Title', type: 'string', initialValue: 'ЦИКЛ (MUSIC VIDEO)'},
        {name: 'subtitle', title: 'Subtitle/Description', type: 'text'},
        {name: 'youtubeLink', title: 'YouTube Link', type: 'url'},
        {name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Дивитись на YouTube'},
      ],
      options: {collapsible: true, collapsed: true}
    }),

    // --- PROMO SECTION 1 (Tour) ---
    defineField({
      name: 'promoSection1',
      title: 'Promo Section 1 (e.g. Tour)',
      type: 'object',
      fields: [
        {name: 'image', title: 'Background Image', type: 'image', options: {hotspot: true}},
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'string'},
        {name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'ЧИТАТИ'},
        {name: 'link', title: 'Button Link', type: 'string', description: 'Can be an internal path (/news/...) or external URL'},
      ],
      options: {collapsible: true, collapsed: true}
    }),

    // --- PROMO SECTION 2 (Concert) ---
    defineField({
      name: 'promoSection2',
      title: 'Promo Section 2 (e.g. Concert)',
      type: 'object',
      fields: [
        {name: 'image', title: 'Background Image', type: 'image', options: {hotspot: true}},
        {name: 'title', title: 'Title', type: 'string'},
        {name: 'subtitle', title: 'Subtitle', type: 'text'},
        {name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'ЧИТАТИ'},
        {name: 'link', title: 'Button Link', type: 'string'},
      ],
      options: {collapsible: true, collapsed: true}
    }),

    // --- NEWSLETTER SECTION ---
    defineField({
      name: 'newsletterSection',
      title: 'Newsletter Section',
      type: 'object',
      fields: [
        {name: 'title', title: 'Title', type: 'string', initialValue: 'Підписуйтесь на наші новини!'},
        {name: 'description', title: 'Description', type: 'text'},
        {name: 'placeholder', title: 'Input Placeholder', type: 'string', initialValue: 'Ваша електронна пошта...'},
        {name: 'buttonText', title: 'Button Text', type: 'string', initialValue: 'Підписатися'},
        {name: 'successMessage', title: 'Success Message', type: 'string', initialValue: 'Дякуємо за підписку!'},
        {name: 'errorMessage', title: 'Error Message', type: 'string', initialValue: 'Щось пішло не так.'},
      ],
      options: {collapsible: true, collapsed: true}
    }),
  ],
})