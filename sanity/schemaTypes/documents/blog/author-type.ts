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
      validation: (Rule) => Rule.required().warning("Author name is required."),
      description: "Full name of the author.",
    }),
    defineField({
      name: "designation",
      title: "Designation",
      type: "string",
      description: "Career or profession of the author (e.g., Writer, Designer).",
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: "Slug",
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required().warning("Author slug is required."),
      description: "URL-friendly version of the author's name.",
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
          description: 'Important for SEO and accessibility.',
          validation: (Rule) => Rule.required().warning("Alt text is required for accessibility."),
        },
      ],
    }),
    defineField({
      name: "bio",
      title: "Short Bio",
      type: "text",
      description: "A short summary or bio of the author (for quick reference).",
      validation: (Rule) => Rule.max(160).warning("Keep bio under 160 characters for better SEO."),
    }),
    defineField({
      name: 'about',
      title: "Full About",
      type: 'array',
      description: "A more detailed about section for the author.",
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
      title: "Social Profiles",
      type: "array",
      description: "Links to the author's social media profiles.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "icon",
              type: "string",
              description: "Use FontAwesome icons (e.g., 'fa-twitter'). Refer to: https://fontawesome.com/v4/icons/",
              validation: (Rule) => Rule.required().warning("Icon is required for social profile."),
            },
            {
              name: "url",
              type: "url",
              title: "URL",
              description: "Full URL of the social media profile.",
              validation: (Rule) => Rule.uri().warning("Enter a valid URL."),
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
