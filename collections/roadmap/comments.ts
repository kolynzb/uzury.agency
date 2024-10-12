import type { CollectionConfig } from 'payload';
import { COLLECTION_SLUG_FEEDBACK_COMMENT, COLLECTION_SLUG_FEEDBACK} from '../../constants/slugs';

const Categories: CollectionConfig = {
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  hooks: {
    afterChange: [
      async () => {
        revalidatePath('/');
      },
    ],
    afterDelete: [
      async () => {
        revalidatePath('/');
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      index: true,
    },
    {
      name: 'comment',
      type: 'textarea',
    },
    {
      name: 'post',
      type: 'relationship',
      relationTo: COLLECTION_SLUG_FEEDBACK,
      hasMany: false,
      index: true,
      required: true,
    },
  ],
  slug: COLLECTION_SLUG_FEEDBACK_COMMENT,
};

export default Categories;
