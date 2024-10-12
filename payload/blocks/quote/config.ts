import type { Block } from 'payload';

export const Quote: Block = {
  slug: 'quote',
  imageURL: 'http://localhost:3000/media/quote.png',
  imageAltText: 'Quote block',
  fields: [
    {
      name: 'quote',
      type: 'textarea',
    },
    {
      name: 'author',
      type: 'text',
    },
  ]
};
