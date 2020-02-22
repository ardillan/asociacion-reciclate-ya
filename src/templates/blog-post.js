import React from "react"
import Layout from "../components/layout"
import Aside from "../components/aside"
import { graphql } from "gatsby"
export default ({ data }) => {
  const post = data.allWordpressPost.edges[0].node
  console.log(data)
  return (
    <Layout>
      <div className="columns is-multiline">
        <Aside />
        <div className="column is-8">
          <img
            src={post.jetpack_featured_media_url}
            style={{ width: `100%`, height: 300 }}
          />
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

          <div dangerouslySetInnerHTML={{ __html: post.content }} />
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
