// import Tabs from 'sanity-plugin-tabs'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'placeholderImage',
      title: 'Placeholder Image',
      type: 'image',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'string',
      description: 'Appears in Google results and when sharing the site. Should be between 50–160 characters',
    },
    {
      name: 'socialImage',
      title: 'Social Image',
      type: 'image',
      description: 'Preview image for Twitter, Facebook and in iMessages. Suggested size 1200 × 630.',
      options: {
        hotspot: true
      },
    }
  ],
}
