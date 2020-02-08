import { useStaticQuery, graphql } from "gatsby"

export const useGetAllPosts = () => {
  const posts = useStaticQuery(
    graphql`
      {
        allWordpressPost {
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
