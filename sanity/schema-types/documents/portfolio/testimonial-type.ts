import { defineField, defineType } from "sanity";
import {CommentIcon} from '@sanity/icons'

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "object",
  icon:CommentIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the person providing the testimonial",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description:
        "The role or position of the person providing the testimonial",
    }),
    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "text",
      description: "The testimonial content",
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "reference",
      to: [{ type: "client" }],
      description: "The name of the organization or company",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      client:"client.name",
      media: "image",
    },
    prepare(selection) {
      const { title, media, client } = selection;
      return {
        title,
        media,
        subtitle: client ? `from ${client}` : 'No client selected',
      };
    },
  },
});
