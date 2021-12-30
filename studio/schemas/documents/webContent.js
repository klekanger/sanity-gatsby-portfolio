import { format } from 'date-fns';

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
      name: 'publishedAt',
      title: 'Publiseringstidspunkt',
      description: 'Du kan bruke dette feltet til å forhåndspublisere artikler.',
      type: 'datetime'
    },

    {
      name: 'body',
      title: 'Brødtekst',
      type: 'projectPortableText'
    },
    {
      name: 'webContentTextBoxes',
      title: 'Tekstbokser til web-innhold',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'webContentTextBox' } }]
    },
    {
      name: 'webContentType',
      title: 'Type web-innhold',
      type: 'string',
      options: {
        list: [
          { title: 'Tjeneste', value: 'service' },
          { title: 'Kundereferanse', value: 'customer-reference' },
          { title: 'Om meg', value: 'about-me' },
          { title: 'Kontakt meg', value: 'contact-me' },
          { title: 'Hero-seksjon', value: 'hero' }
        ],
        layout: 'radio'
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'mainImage',
      category: 'webContentCategories.0.title'
    },
    prepare({ title = 'Ingen tittel', publishedAt, media, category }) {
      const dateSegment = format(publishedAt, 'DD.MM.YYYY');
      const published = `Publisert: ${dateSegment} [${category}]`;

      return {
        title,
        media,
        subtitle: publishedAt ? published : `Manglende publiseringsdato [${category}]`
      };
    }
  }
};
