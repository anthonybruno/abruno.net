import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {DocumentIcon} from '@sanity/icons'

// https://www.sanity.io/guides/singleton-document

export default defineConfig({
  name: 'default',
  title: 'abruno.net',

  projectId: 'vqft6e9t',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) => {
        return S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            S.listItem()
              .title("Global content")
              .id("globalContent")
              .icon(DocumentIcon)
              .child(
                // Instead of rendering a list of documents, we render a single
                // document, specifying the `documentId` manually to ensure
                // that we're editing the single instance of the document
                S.document()
                  .schemaType("globalContent")
                  .documentId("e27da4ae-549a-4887-b8af-1401b2cd2fa5")
              ),
              S.documentTypeListItem('project')
          ])
      },
    }), 
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
