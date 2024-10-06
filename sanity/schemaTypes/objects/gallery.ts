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
            title: "Display Type",
            type: "string",
            options: {
                list: ["Bento", "Courasel"],// TODO: Look for more types
            },
            description: "Indicates the way you want to display the images in the gallery",
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                        captionField: "caption",
                    },
                    fields: [
                        {
                            name: "alt",
                            title: "Alternative Text",
                            type: "string",
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
            displayType: "display",
            title: "title",
            images: "images",
        },
    },
    components: {
        preview: GalleryPreview as any,
    },
});

// https://www.sanity.io/guides/portable-text-how-to-add-a-custom-youtube-embed-block
