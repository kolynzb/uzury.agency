import { COLLECTION_SLUG_TEAM_MEMBER, COLLECTION_SLUG_USER } from '@/constants/slugs';
import { CollectionConfig } from 'payload';

const TeamMember: CollectionConfig = {
  slug: COLLECTION_SLUG_TEAM_MEMBER,
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role'],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name',
    },
    {
      name: 'role',
      type: 'text',
      label: 'Role',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Bio',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: COLLECTION_SLUG_USER,
      label: 'Associated User',
      admin: {
        description: 'Link this team member to a user account if applicable.',
      },
    },

    {
      name: 'socials',
      type: 'array',
      label: 'Socials',
      fields: [
        {
          name: 'platform',
          type: 'text',
          label: 'Platform',
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
        },
      ],
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      label: 'SEO Description',
      validate: (value) => {
        if (value && value.length > 160) {
          return 'SEO Description must be 160 characters or less';
        }
        return true;
      },
    },
  ],
};

export default TeamMember;
