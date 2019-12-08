import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'

const hiddenDocTypes = listItem =>
  !['category', 'person', 'project', 'siteSettings'].includes(listItem.getId())

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
        .title('Forfattere')
        .schemaType('person')
        .child(S.documentTypeList('person').title('Forfattere')),
      S.listItem()
        .title('Kategorier')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Kategorier')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
