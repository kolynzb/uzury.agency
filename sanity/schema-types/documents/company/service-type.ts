import { defineField, defineType } from "sanity";
import { LuPackage2 } from "react-icons/lu";

export default defineType({
    name: "service",
    title: "Service",
    icon:LuPackage2,
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The title of the service.",
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
            description: "A brief description of the service.",
        }),
        defineField({
            name: "icon",
            title: "Icon",
            type: "image",
            description: "An icon to represent the service.",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            description: "The main image for the service page.",
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "features",
            title: "Features",
            type: "array",
            of: [{ type: "string" }],
            description: "List of key features or benefits of this service.",
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
            title: "title",
            media: "icon",
        },
    },
});
