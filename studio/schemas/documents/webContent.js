export default {
  name: 'webContent',
  title: 'Web-innhold',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Hovedbilde',
      type: 'figure'
    },

    {
      name: 'body',
      title: 'Brødtekst',
      type: 'projectPortableText'
    }
  ]
};
