import type { CollectionConfig } from 'payload';
import { COLLECTION_SLUG_BLOG_CATEGORY } from '@/constants/slugs';
import { text } from 'payload/shared'
import { slugField } from '@/payload/fields/slug'
export const PostCategories: CollectionConfig = {
  access: {
    delete: () => false,
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group:"Blog",

  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin:{
         description: 'The name of the blog category.'
      },
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      validate: (val:any,args:any) => {
        if(!val) return "This Field is required"
        if (val.length > 200) return 'Keep the description concise (maximum 200 characters).';  
        return text(val, args) 
      },
      admin: {
        description: 'Short description of the category. Used for SEO and internal reference.',
      },
      required: true,
    },
    ...slugField()
  ],
  slug: COLLECTION_SLUG_BLOG_CATEGORY,
};
