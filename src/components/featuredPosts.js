import React from "react"
import { useFeaturedPosts } from "../hooks/get-featured-post"
import { Link } from "gatsby"

const FeaturedPosts = () => {
  const featuredPosts = useFeaturedPosts().edges[0].node

  return (
    <section
      className="main-banner"
      style={{
        backgroundImage: `url(${featuredPosts.jetpack_featured_media_url})`,
        backgroundSize: `cover`,
      }}
    >
      <div className="columns is-vcentered is-multiline">
        <div className="column is-9 is-offset-1">
          <h1 dangerouslySetInnerHTML={{ __html: featuredPosts.title }} />
          <div dangerouslySetInnerHTML={{ __html: featuredPosts.excerpt }} />
        </div>
        <div className="column is-9 is-offset-1">
          <Link className="btn-regular" to={`/${featuredPosts.slug}`}>
            Ver más
          </Link>
        </div>
      </div>

      <p></p>
    </section>
  )
}

export default FeaturedPosts
