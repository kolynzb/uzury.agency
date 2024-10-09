import { defineField, defineType } from "sanity";
import { LuHeartHandshake } from "react-icons/lu";

export default defineType({
    name: "partner",
    title: "Partner",
    type: "document",
    icon:LuHeartHandshake,
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            description: "The name of the partner organization or company.",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        }),
        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            options: {
                hotspot: true,
            },
            description: "Logo of the partner company.",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "Brief description of the partner and their relationship with your company.",
        }),
        defineField({
            name: "url",
            title: "Website URL",
            type: "url",
            description: "The official website URL of the partner company.",
        }),
        defineField({
            name: "seoDescription",
            title: "SEO Description",
            type: "text",
            description: "Used for search engines. Keep it within 160 characters.",
            validation: (Rule) => Rule.max(160),
        }),
    ],
    preview: {
        select: {
            title: "name",
            media: "logo",
        },
    },
});
