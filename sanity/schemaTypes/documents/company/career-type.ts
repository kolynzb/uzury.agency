import { defineField, defineType } from "sanity";

export default defineType({
    name: "career",
    title: "Career",
    type: "document",
    fields: [
        defineField({
            name: "position",
            title: "Position",
            type: "string",
            description: "The job position title.",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "position",
                maxLength: 96,
            },
        }),
        defineField({
            name: "department",
            title: "Department",
            type: "string",
            description: "The department where the position belongs.",
        }),
        defineField({
            name: "description",
            title: "Job Description",
            type: "text",
            description: "A detailed description of the job responsibilities.",
        }),
        defineField({
            name: "requirements",
            title: "Requirements",
            type: "array",
            of: [{ type: "string" }],
            description: "List of qualifications or requirements for the job.",
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "string",
            description: "Where the job is located.",
        }),
        defineField({
            name: "applicationUrl",
            title: "Application URL",
            type: "url",
            description: "URL where candidates can apply for the job.",
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
            title: "position",
        },
    },
});
