import path from 'path';

async function turnArtworksIntoPages({ graphql, actions }) {
    // 1. Get a template
    const artworkTemplate = path.resolve('./src/components/templates/Artwork.js');
    // 2. query all artworks
    const { data } = await graphql(`
      query {
        artworks: allSanityArtwork {
          nodes {
            name
            slug {
              current
            }
          }
        }
      }
    `);
    // 3. loop over all artworks and creata page
    data.artworks.nodes.forEach((artwork) => {
      actions.createPage({
        // what is the url for this page
        path: `artwork/${artwork.slug.current}`,
        component: artworkTemplate,
        context: {
          slug: artwork.slug.current,
        },
      });
    });
  }
  
  export async function createPages(params) {
    // create pages dynamically
    await turnArtworksIntoPages(params);
  }