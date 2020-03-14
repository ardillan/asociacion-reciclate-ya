import React from "react"
import Layout from "../components/layout"
import Aside from "../components/aside"
import { graphql } from "gatsby"
export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  return (
    <Layout>
      <div className="columns is-multiline post">
        <div className="column is-12 post-image">
          <img src={post.jetpack_featured_media_url} alt={post.title} />
        </div>
        <div className="column is-12">
          <div className="columns main-content">
            <Aside />
            <div className="column is-9">
              <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    allWordpressPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
          jetpack_featured_media_url
        }
      }
    }
  }
`
