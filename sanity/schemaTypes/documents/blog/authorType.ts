import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const authorType = defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: "Name",
      type: 'string',
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      description: "Could be career or profession",
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: "Slug",
      options: {
        source: 'name',
        maxLength: 96,

      },
    }),
    defineField({
      name: 'image',
      title: "Image",
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
    }),
    defineField({
      name: 'about',
      title: "Full About",
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        }),
      ],
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "string",
              description:"use font awesome icons https://fontawesome.com/v4/icons/"
            },
            {
              name: "url",
              type: "url",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
