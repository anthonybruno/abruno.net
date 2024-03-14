import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'globalContent',
  type: 'document',
  title: 'Global',
  __experimental_formPreviewTitle: false,
  fields: [
    defineField({
      name: 'homeContent',
      title: 'Homepage Content',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'projectListItems',
      title: 'Project list items',
      type: 'array',
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { 
              name: "title", 
              title: "Title",
              type: "string",
              validation: (rule: any) => rule.required(),
            },
            { 
              name: "subtitle", 
              title: "Subtitle",
              type: "string",
              validation: (rule: any) => rule.required(),
            },
            { 
              name: "external", 
              title: "External link?",
              type: "boolean",
              initialValue: false,
              validation: (rule: any) => rule.required(),
            },
            { 
              name: "url", 
              title: "Slug or URL",
              type: "string",
              validation: (rule: any) => rule.required(),
            },
          ]
        }
      ],
    }),
    defineField({
      name: 'contactItems',
      title: 'Contact list',
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
              type: "string", 
              name: "url",
              validation: (rule) => rule.required(),
            }
          ]
        }
      ],
    }),
  ],
  preview: {
  },
})
