import { EmbedReferences, RichTextContent } from '@graphcms/rich-text-types';

export const content: RichTextContent = {
  children: [
    {
      type: 'heading-two',
      children: [{ text: 'Awesome new GraphCMS cap!' }],
    },
    {
      type: 'paragraph',
      children: [
        { text: 'Sweet black ' },
        { bold: true, text: 'cap' },
        { text: ' ' },
        { text: 'with', underline: true },
        { text: ' ' },
        { text: 'embroidered', italic: true },
        { text: ' ' },
        { bold: true, text: 'GraphCMS' },
        { text: ' logo.' },
      ],
    },
    {
      type: 'bulleted-list',
      children: [
        {
          type: 'list-item',
          children: [
            {
              type: 'list-item-child',
              children: [{ text: 'Embroided logo' }],
            },
          ],
        },
        {
          type: 'list-item',
          children: [
            {
              type: 'list-item-child',
              children: [{ text: 'Fits well' }],
            },
          ],
        },
        {
          type: 'list-item',
          children: [
            {
              type: 'list-item-child',
              children: [{ text: 'Comes in black' }],
            },
          ],
        },
        {
          type: 'list-item',
          children: [
            {
              type: 'list-item-child',
              children: [{ text: 'Reasonably priced' }],
            },
          ],
        },
      ],
    },
    { type: 'paragraph', children: [{ text: '<Test />', code: true }] },
    {
      type: 'embed',
      nodeId: 'cknjbzowggjo90b91kjisy03a',
      children: [
        {
          text: '',
        },
      ],
      nodeType: 'Asset',
    },
    {
      type: 'embed',
      nodeId: 'ckq2eek7c00ek0d83iakzoxuh',
      children: [
        {
          text: '',
        },
      ],
      nodeType: 'Asset',
    },
    {
      type: 'embed',
      nodeId: 'ckrus0f14ao760b32mz2dwvgx',
      children: [
        {
          text: '',
        },
      ],
      nodeType: 'Asset',
    },
  ],
};

export const references: EmbedReferences = [
  {
    id: 'cknjbzowggjo90b91kjisy03a',
    handle: 'dsQtt0ARqO28baaXbVy9',
    fileName: 'nkkwzgz0bw6fg6mqzjc1.png',
    height: 690,
    width: 880,
    url: 'https://media.graphcms.com/dsQtt0ARqO28baaXbVy9',
    mimeType: 'image/png',
  },
  {
    id: 'ckrus0f14ao760b32mz2dwvgx',
    handle: '7M0lXLdCQfeIDXnT2SVS',
    fileName: 'file_example_MP4_480_1_5MG.mp4',
    height: null,
    width: null,
    url: 'https://media.graphcms.com/7M0lXLdCQfeIDXnT2SVS',
    mimeType: 'video/mp4',
  },
  {
    id: 'ckq2eek7c00ek0d83iakzoxuh',
    handle: 'hUxrMqNSn6EAJiv6bk9l',
    fileName: 'Screen Recording 2021-06-18 at 10.58.11.mov',
    height: null,
    width: null,
    url: 'https://media.graphcms.com/hUxrMqNSn6EAJiv6bk9l',
    mimeType: 'video/quicktime',
  },
];
