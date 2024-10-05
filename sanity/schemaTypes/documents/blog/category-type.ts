import {TagIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: "blogCategory",
  title: "Blog Category",
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'The name of the blog category.',
      validation: (Rule) => Rule.required().warning('A category title is required.'),
    }),
    defineField({
      name: "description",
      type: "text",
      title: 'Description',
      description: 'Short description of the category. Used for SEO and internal reference.',
      validation: (Rule) =>
          Rule.max(200).warning('Keep the description concise (maximum 200 characters).'),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: 'Category image, will be displayed on category pages.',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Describe the image for accessibility.',
          validation: (Rule) =>
              Rule.required().error('Alternative text is required for accessibility.'),
        }),
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      description: 'URL-friendly version of the category title.',
      validation: (Rule) => Rule.required().error('A URL slug is required for this category.'),
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
  ],
})
