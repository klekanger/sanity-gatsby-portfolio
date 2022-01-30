import S from '@sanity/desk-tool/structure-builder';
import { MdSettings } from 'react-icons/md';

const hiddenDocTypes = listItem =>
  ![
    'category',
    'webContent',
    'person',
    'author',
    'project',
    'siteSettings',
    'webFrontpageContent',
    'webContentTextBox'
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Innstillinger')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Forfattere')
        .schemaType('author')
        .child(S.documentTypeList('author').title('Forfattere')),
      S.listItem()
        .title('Artikler')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Artikler')),
      S.listItem()
        .title('Artikler - kategorier')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Artikler - kategorier')),
      S.listItem()
        .title('Undersider på nettsiden')
        .schemaType('webContent')
        .child(S.documentTypeList('webContent').title('Undersider - innhold')),
      S.listItem()
        .title('Undersider - tekstbokser til artiklene')
        .schemaType('webContentTextBox')
        .child(S.documentTypeList('webContentTextBox').title('Undersider - tekstbokser ')),
      S.listItem()
        .title('Innhold til forsidemoduler')
        .schemaType('webFrontpageContent')
        .child(S.documentTypeList('webFrontpageContent').title('Innhold til forsidemoduler')),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
