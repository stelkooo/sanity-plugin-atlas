import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { AtlasPlugin } from 'sanity-plugin-atlas';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'atlas-studio',
  title: 'Atlas Studio',
  projectId: '8mqdxj1i',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            ...S.documentTypeListItems().filter((item) => {
              const id = item.getId();
              return id != null && !['siteSettings'].includes(id);
            }),
          ]),
    }),
    AtlasPlugin(),
  ],
  schema: {
    types: schemaTypes,
  },
});
