export default {
  name: 'category',
  type: 'document',
  title: 'Kategorier artikler',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Beskrivelse'
    }
  ]
};
