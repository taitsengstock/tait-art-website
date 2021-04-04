
export default {
    siteMetadata: {
      title: `Tait Art Website`,
      siteUrl: 'https://tait.artwebsite',
      description: 'Tait art website',
    },
  plugins: [
    'gatsby-plugin-styled-components',
        {
        // this is the name of the plugin you are adding
        resolve: 'gatsby-source-sanity',
        options: {
          projectId: '5phh63ln',
          dataset: 'production',
          watchMode: true,
          token: process.env.SANITY_TOKEN,
        },
      },
    ]
}