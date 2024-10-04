import { defineField, defineType } from "sanity";
import {  RemoveIcon,} from '@sanity/icons'

export default defineType({
    name: 'break',
    type: 'object',
    title: 'Break',
    icon: RemoveIcon,
    fields: [
      {
        name: 'style',
        type: 'string',
        options: {
          list: ['break', 'readMore'],
        },
      },
    ],
  });
  