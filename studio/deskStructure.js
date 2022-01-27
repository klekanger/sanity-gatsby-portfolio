import S from '@sanity/desk-tool/structure-builder';
import { MdArticle, MdCategory, MdHome, MdSettings, MdViewModule } from 'react-icons/md';

const hiddenDocTypes = listItem =>
  ![
    'category',
    'webContent',
    'person',
    'project',
    'siteSettings',
    'webContentCategory',
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
        .schemaType('person')
        .child(S.documentTypeList('person').title('Forfattere')),
      S.listItem()
        .title('Artikler')
        .schemaType('project')
        .child(S.documentTypeList('project').title('Artikler'))
        .icon(MdArticle),
      S.listItem()
        .title('Artikler - kategorier')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Artikler - kategorier'))
        .icon(MdCategory),
      S.listItem()
        .title('Undersider på nettsiden')
        .schemaType('webContent')
        .child(S.documentTypeList('webContent').title('Undersider - innhold'))
        .icon(MdArticle),
      S.listItem()
        .title('Undersider - kategorier')
        .schemaType('category')
        .child(S.documentTypeList('webContentCategory').title('Undersider - kategorier'))
        .icon(MdCategory),
      S.listItem()
        .title('Undersider - tekstbokser til artiklene')
        .schemaType('webContentTextBox')
        .child(S.documentTypeList('webContentTextBox').title('Undersider - tekstbokser '))
        .icon(MdViewModule),
      S.listItem()
        .title('Innhold til forsidemoduler')
        .schemaType('webFrontpageContent')
        .child(S.documentTypeList('webFrontpageContent').title('Innhold til forsidemoduler'))
        .icon(MdHome),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ]);
