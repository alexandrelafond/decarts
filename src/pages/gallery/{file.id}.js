import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from "gatsby-image"
import files from "../../helpers/files"

const GalleryId = props => {
  const { file } = props.data
  const fileInfo = files.find(item => {
    return item.fileName === file.name
  })

  return (
    <Layout>
      <SEO title="gallery id" />
      <Link
        to="/"
        className="pb-1 border-b border-gray-500 text-gray-500 inline-flex items-center hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="16"
          height="16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="ml-2">Retour</span>
      </Link>
      {fileInfo && (
        <div className="mt-12">
          <div className="flex flex-col items-center">
            <h2>{`Artiste: ${fileInfo.artist.name} (${fileInfo.artist.origin})`}</h2>
            <h4>{`Titre: ${fileInfo.info.title} (${fileInfo.info.year})`}</h4>
          </div>
          <div className="text-center">
            <Img fixed={file.childImageSharp.fixed} />
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white p-5 rounded-lg my-5">
              <h3>Informations additionelles</h3>
              <h4>Medium</h4>
              <div>{fileInfo.info.medium}</div>
              <h4 className="mt-4">Dimensions</h4>
              <div>{`Sans encadrement: ${fileInfo.info.sizes.withoutFrame.width}" x ${fileInfo.info.sizes.withoutFrame.height}"`}</div>
              <div>{`Avec encadrement: ${fileInfo.info.sizes.withFrame.width}" x ${fileInfo.info.sizes.withFrame.height}"`}</div>
            </div>
            <div className="flex items-center">
              Valeur : <div className="font-bold">{fileInfo.price.worth}$</div>
            </div>
            <div className="flex items-center">
              Prix demandé :
              <div className="font-bold">{fileInfo.price.asked}$</div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default GalleryId

export const query = graphql`
  query($id: String!) {
    file(id: { eq: $id }) {
      name
      childImageSharp {
        fixed(width: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
