import { defineField, defineType } from "sanity";
import { LuContact2 } from "react-icons/lu";

export default defineType({
    name: "team",
    title: "Team Mate",
    type: "document",
    icon:LuContact2,
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            description: "The name of the team member.",
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
            name: "role",
            title: "Role",
            type: "string",
            description: "The role or position of the team member.",
        }),
        defineField({
            name: "bio",
            title: "Bio",
            type: "text",
            description: "A short biography of the team member.",
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            description: "Profile image of the team member.",
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
                            name: "platform",
                            type: "string",
                            description: "Social media platform (e.g., LinkedIn, Twitter).",
                        },
                        {
                            name: "url",
                            type: "url",
                            description: "URL to the social media profile.",
                        },
                    ],
                },
            ],
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
            media: "image",
        },
    },
});
