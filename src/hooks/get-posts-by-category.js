import { useStaticQuery, graphql } from "gatsby"

export const useGetPostsByCategory = () => {
  const posts = useStaticQuery(
    graphql`
      {
        allWordpressPost(
          filter: { categories: { elemMatch: { name: { eq: "Salida" } } } }
          sort: { fields: date, order: DESC }
        ) {
          totalCount
          edges {
            node {
              title
              slug
              date
              excerpt
              jetpack_featured_media_url
            }
          }
        }
      }
    `
  )

  return posts.allWordpressPost
}
