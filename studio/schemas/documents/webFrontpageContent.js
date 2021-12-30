import { format } from 'date-fns';

export default {
  name: 'webFrontpageContent',
  title: 'Web-innhold til forsidemoduler',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tittel (bruk <mark>...</mark> for å utheve ord i annen farge)',
      type: 'string'
    },
    {
      name: 'images',
      title: 'Bilder',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Bilde',
          type: 'figure'
        }
      ]
    },
    {
      name: 'textBlocks',
      title: 'Tekstblokker',
      type: 'array',
      of: [
        {
          name: 'textBlock',
          title: 'Tekstblokk (bruk <b>...</b> for bold og <i>...</i> for kursiv)',
          type: 'text'
        }
      ]
    },
    {
      name: 'webFrontPageIdentifier',
      title: 'Unik identifikator for web-forsidemodul (f.eks. "om-meg-modul")',
      type: 'string',
      validation: Rule =>
        Rule.required()
          .min(3)
          .max(20)
    }
  ],

  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'images.0',
      category: 'webContentCategories.0.title'
    },
    prepare({ title = 'Ingen tittel', media, category }) {
      return {
        title,
        media
      };
    }
  }
};
