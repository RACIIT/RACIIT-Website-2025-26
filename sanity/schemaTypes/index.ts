const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'avenue',
      title: 'Avenue',
      type: 'string',
      options: {
        list: [
          { title: 'Community Service', value: 'Community Service' },
          { title: 'Professional Development', value: 'Professional Development' },
          { title: 'Club Service', value: 'Club Service' },
          { title: 'International Service', value: 'International Service' },
          { title: 'Sports & Fellowship', value: 'Sports & Fellowship' },
          { title: 'Digital Communications', value: 'Digital Communications' },
          { title: 'Public Relation', value: 'Public Relation' },
        ],
      },
    },
    {
      name: 'banner',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'featured',
      title: 'Featured (Home Carousel)',
      type: 'boolean',
    },
  ],
};

export const schemaTypes = [project];