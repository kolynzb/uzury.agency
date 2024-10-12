import { COLLECTION_SLUG_CLIENT, COLLECTION_SLUG_MEDIA } from "@/constants/slugs";
import { slugField } from "@/payload/fields/slug";
import { CollectionConfig } from "payload";

export const Client: CollectionConfig = {
    slug: COLLECTION_SLUG_CLIENT,
    admin: {
        useAsTitle: 'name',
        // defaultColumns: ['name', 'updatedAt'],
        group: 'Portfolio',
      },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,

        },
        {
            name: 'description',
            type: 'textarea',
            admin: {
              description: 'A brief description or details about the client',
            },
          },
          {
            name: 'logo',
            type: 'upload',
            relationTo: COLLECTION_SLUG_MEDIA,
            admin: {
              description: 'Client logo',
            },
          },
        ...slugField()
    ]
}