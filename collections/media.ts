import type { CollectionConfig } from "payload";

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import path from "path";
import { COLLECTION_SLUG_MEDIA } from "@/constants/slugs";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const Media: CollectionConfig = {
  admin: {
    description: "Create, update, and delete media.",
  },
  fields: [
    {
      name: "alt",
      required: true,
      type: "text",
      admin: {
        description:
          "An alternative text for folks with screen readers. Describe what is in the image",
      },
    },
    {
      name: "caption",
      admin: {
        description: "A caption that sits below the image for context",
      },
      type: "richText",
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
    },
  ],
  slug: COLLECTION_SLUG_MEDIA,
  upload: {
    staticDir: path.resolve(dirname, "../media"),
  },
};
