import { useStaticQuery, graphql } from "gatsby"

export const useFeaturedPosts = () => {
  const posts = useStaticQuery(
    graphql`
      {
        allWordpressPost(
          filter: { sticky: { eq: true } }
          sort: { fields: id }
        ) {
          edges {
            node {
              title
              slug
              excerpt
              sticky
              jetpack_featured_media_url
            }
          }
        }
      }
    `
  )

  return posts.allWordpressPost
}
