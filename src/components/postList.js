import React from "react"
import { Link } from "gatsby"
import { useGetAllPosts } from "../hooks/get-all-posts"
import { useGetPostsByCategory } from "../hooks/get-posts-by-category"

const PostsList = props => {
  const allPosts = useGetAllPosts()
  const allPostsCategory = useGetPostsByCategory()
  const posts = props.category === "all" ? allPosts : allPostsCategory

  return (
    <ul className="featured-posts">
      {posts.edges.slice(0, 2).map((post, index) => {
        return (
          <li key={index}>
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
