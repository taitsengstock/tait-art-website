export default {
    // Computer Name
    name: 'artwork',
    // visible title
    title: 'Artworks',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Artwork Name',
        type: 'string',
        description: 'Name of the artwork',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 100,
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        title: 'Artwork Description',
        type: 'string',
        description: 'Description of the artwork',
      },
      {
        name: 'medium',
        title: 'Medium',
        type: 'reference',
        to: { type: 'medium' }
      },
      {
        name: 'date',
        title: 'Publish Date',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
    ],
  };
  