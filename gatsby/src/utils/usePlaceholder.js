import React from 'react'
import { graphql, useStaticQuery } from "gatsby"

const usePlaceholder = () => {

  const siteSettings = useStaticQuery(graphql`
    query {
      sanitySiteSettings(_id: {regex: "/(drafts\\\\.)?siteSettings/"}) {
        placeholderImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    `)

  const image = siteSettings.sanitySiteSettings.placeholderImage

  return image
}

export default usePlaceholder