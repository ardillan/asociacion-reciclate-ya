// import { useStaticQuery, graphql } from "gatsby"

// export const GetFeaturedPost = () => {
//   const post = useStaticQuery(
//     graphql`
//       {
//         allWordpressPost(filter: { sticky: { eq: true } }, limit: 1) {
//           edges {
//             node {
//               title
//             }
//           }
//         }
//       }
//     `
//   )

//   return post.allWordPressPost
// }

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getFeaturedPost = () => {
  const data = useStaticQuery(graphql`
    query FeaturedPost {
      allWordpressPost(filter: { sticky: { eq: true } }, limit: 1) {
        edges {
          node {
            title
          }
        }
      }
    }
  `)

  return data.allWordPressPost
}

export default getFeaturedPost
