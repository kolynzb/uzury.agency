import {defineType, defineArrayMember} from 'sanity'
import {ImageIcon} from '@sanity/icons'
import { LuTable2 } from "react-icons/lu";
import { LuHighlighter } from "react-icons/lu";
import { FaCode, FaRegImage } from "react-icons/fa";
import { HighlightDecorator } from "../components/blocks";

/**
 * This is the schema type for block content used in the post document type
 * Importing this type into the studio configuration's `schema` property
 * lets you reuse it in other document types with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */

export const blockContentType = defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      // Styles let you define what blocks can be marked up as. The default
      // set corresponds with HTML tags, but you can set any title or value
      // you want, and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the Portable Text Editor
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          { title: "Underline", value: "underline" },
          { title: "Strike", value: "strike-through" },
          { title: "Code", value: "code" },
          {
            title: "Highlight",
            value: "highlight",
            icon: LuHighlighter,
            component: HighlightDecorator,
          },
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {
        hotspot: true,
        metadata: [
          "blurhash", // Default: included
          "lqip", // Default: included
          "palette", // Default: included
          "exif", // Default: not included
          "location", // Default: not included
        ],
        captionField: "caption",
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Image caption",
          description: "Caption displayed below the image.",
        },
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessibility.",
        },
      ],
    }),
    defineArrayMember({
      type: "code",
      title: "Code Block",
      icon: FaCode,
      options: {
        withFilename: true,
      },
    }),
    defineArrayMember({
      type: "youtube",
    }),
    defineArrayMember({
      type: "quote",
    }),
    defineArrayMember({ type: "codeSandbox" }),
    defineArrayMember({
      type: "table",
      icon: LuTable2,
    }),
    defineArrayMember({ type: "break" }),
  ],
})
