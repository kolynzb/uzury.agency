import { defineField, defineType } from "sanity";
import { LuTicket } from "react-icons/lu";

export default defineType({
    name: "event",
    title: "Event",
    type: "document",
    icon: LuTicket,
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "The title of the event.",
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
            name: "date",
            title: "Date",
            type: "datetime",
            description: "The date and time of the event.",
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
            description: "The venue or location of the event.",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "A brief overview of the event.",
        }),
        defineField({
            name: "image",
            title: "Event Image",
            type: "image",
            options: {
                hotspot: true,
            },
            description: "Image representing the event.",
        }),
        defineField({
            name: "url",
            title: "Registration URL",
            type: "url",
            description: "URL for event registration or more information.",
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
            media: "image",
        },
    },
});
