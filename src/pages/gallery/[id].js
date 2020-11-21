import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import ImgSrc from "../../images/_L104587.jpg"

const GalleryId = props => {
  return (
    <Layout>
      <SEO title="gallery id" />
      <Link to="/" className="pb-1 border-b border-gray-500 text-gray-500">
        {`< Retour`}
      </Link>
      <div className="mt-12">
        <h3>{`Toile ${props.params.id}`}</h3>
        <img src={ImgSrc} />
      </div>
    </Layout>
  )
}

export default GalleryId
