import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'technicalItems',
      title: 'Technical list',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'strategyItems',
      title: 'Strategy list',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
    }),
    defineField({
      name: 'primaryImage',
      title: 'Primary image',
      type: 'object',
      fields: [
        { name: 'image', title: 'Image', type: 'image' },
        { name: 'alt', title: 'Alt', type: 'string' },
      ]
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'actionItems',
      title: 'Call to Action links',
      type: 'array',
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { 
              type: "string", 
              name: "label",
              validation: (rule) => rule.required()
            },
            { 
              type: "url", 
              name: "url",
              validation: (rule) => rule.required(),
            },
            { 
              type: "boolean", 
              name: "new_window",
              validation: (rule) => rule.required(),
            }
          ]
        }
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      // imageUrl: 'image.asset.url',
    },
  },
})
