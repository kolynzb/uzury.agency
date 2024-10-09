import { defineField, defineType } from "sanity";
import { LuHelpCircle } from "react-icons/lu";

export default defineType({
    name: "faq",
    title: "FAQ",
    type: "document",
    icon:LuHelpCircle,
    fields: [
        defineField({
            name: "question",
            title: "Question",
            type: "string",
            description: "The frequently asked question.",
        }),
        defineField({
            name: "answer",
            title: "Answer",
            type: "text",
            description: "The answer to the question.",
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            description: "The category this FAQ belongs to (e.g., Pricing, Features).",
        }),
        defineField({
            name: "isFeatured",
            title: "Featured FAQ",
            type: "boolean",
            description: "Mark this FAQ as a featured item.",
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
            title: "question",
        },
    },
});
