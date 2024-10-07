import { defineField, defineType } from "sanity";
import {GalleryPreview} from "@/sanity/components/gallery-preview";
import {FaRegImages} from "react-icons/fa";

export default defineType({
    name: "gallery",
    title: "Gallery",
    icon: FaRegImages,
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Name this Gallery",
            description: "This is the title of your gallery. (Make it easy for you to remember).",
            type: "string",
        }),
        defineField({
            name: "display",
            title: "Layout Display ",
            type: "string",
            options: {
                list: [
                    { title: "Normal Grid", value: "grid" },
                    { title: "Bento Grid", value: "bento" },
                    { title: "Slider", value: "slider" }
                ],
                layout: "radio" },
            description: "Indicates the way you want to display the images in the gallery",
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            description: "Add multiple images to create a gallery.",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                        captionField: "caption",
                    },
                    validation: (Rule) => Rule.required(),
                    fields: [
                        {
                            name: "caption",
                            type: "string",
                            title: "Caption",
                            options: { isHighlighted: true },
                        },
                        {
                            name: "alt",
                            title: "Alternative Text",
                            type: "string",
                            options: { isHighlighted: true },
                            description: "Important for accessibility. Describe the image for visually impaired users.",
                            validation: (Rule) =>
                                Rule.required().error("Alternative text is required for accessibility."),
                        }
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            display: "display",
            title: "title",
            images: "images",
        },
    },
    components: {
        preview: GalleryPreview as any,
    },
});

// https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
