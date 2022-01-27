import S from '@sanity/desk-tool/structure-builder';
import { MdSettings } from 'react-icons/md';

const hiddenDocTypes = listItem =>
  !['category', 'webContent', 'person', 'project', 'siteSettings', 'webContentCategory'].includes(
    listItem.getId()
  );

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
        .title('Artikler')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Artikler')),
      S.listItem()
        .title('Kategorier artikler')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Kategorier artikler')),
      S.listItem()
        .title('Web-innhold')
        .schemaType('webContent')
        .child(S.documentTypeList('webContent').title('Web-innhold')),
      S.listItem()
        .title('Kategorier web-innhold')
        .schemaType('category')
        .child(S.documentTypeList('webContentCategory').title('Kategorier web-innhold')),
      S.listItem()
        .title('Forfattere')
        .schemaType('person')
        .child(S.documentTypeList('person').title('Forfattere')),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
