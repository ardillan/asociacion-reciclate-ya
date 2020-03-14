import React from "react"
import { Link } from "gatsby"
import { useGetAllPosts } from "../hooks/get-all-posts"
import { useGetPostsByCategory } from "../hooks/get-posts-by-category"

const PostsList = props => {
  const allPosts = useGetAllPosts()
  const allPostsCategory = useGetPostsByCategory()
  const posts = props.category === "all" ? allPosts : allPostsCategory

  return (
    <ul className="featured-posts columns is-multiline">
      {posts.edges.slice(0, props.length).map((post, index) => {
        return (
          <li key={index} className="column is-6-desktop is-12-mobile">
            <article className="card">
              <Link to={`/${post.node.slug}`}>
                <header>
                  <img
                    src={post.node.jetpack_featured_media_url}
                    alt={post.node.title}
                  />
                  <h2 dangerouslySetInnerHTML={{ __html: post.node.title }} />
                </header>
                <div
                  className="excerpt"
                  dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                />
              </Link>
            </article>
          </li>
        )
      })}
    </ul>
  )
}

export default PostsList
