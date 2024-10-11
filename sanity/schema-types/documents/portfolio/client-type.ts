import { defineField, defineType } from "sanity";
import { LuUsers } from "react-icons/lu";

export default defineType({
  name: "client",
  title: "Client",
  type: "document",
  icon:LuUsers as any,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description:
        "A brief description or details about the award or achievement",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
