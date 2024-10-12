import type { Block } from 'payload';

export const Alert: Block = {
  slug: 'alert',
  interfaceName: 'AlertBlock',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        {
          value: 'info',
          label: 'Info',
        },
        {
          value: 'success',
          label: 'Success',
        },
        {
          value: 'warning',
          label: 'Warning',
        },
        {
          value: 'danger',
          label: 'Danger',
        },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
    },
  ],
};
