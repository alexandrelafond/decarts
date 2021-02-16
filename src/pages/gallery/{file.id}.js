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

  const artistInfoString = () => {
    let artistString = `${fileInfo.artist.name}, ${fileInfo.artist.origin}`

    if (fileInfo.artist.birthYear && fileInfo.artist.deathYear) {
      artistString += ` (${fileInfo.artist.birthYear} à ${fileInfo.artist.deathYear})`
    }

    return artistString
  }

  const fileInfoString = () => {
    let fileString = `${fileInfo.info.title}`

    if (fileInfo.info.year) {
      fileString += ` (${fileInfo.info.year})`
    }

    return fileString
  }

  return (
    <Layout>
      <SEO title={fileInfo ? `${fileInfo.info.title}` : "Decarts"} />
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
        <React.Fragment>
          <div className="text-center mt-12">
            <h2>{artistInfoString()}</h2>
          </div>

          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-around mt-12">
            <Img fixed={file.childImageSharp.fixed} />
            <div className="md:w-1/2 mt-12 md:mt-0 ml-5">
              <h3 className="pl-5">{fileInfoString()}</h3>
              <div className="bg-white rounded-lg p-5">
                <div className="font-bold mt-5 mb-2">Medium</div>
                <div>{fileInfo.info.medium}</div>
                <div className="font-bold mt-5 mb-2">Dimensions</div>
                {fileInfo.info.frame ? (
                  <>
                    <div>{`Sans encadrement: ${fileInfo.info.sizes.withoutFrame.width}" x ${fileInfo.info.sizes.withoutFrame.height}"`}</div>
                    <div>{`Avec encadrement: ${fileInfo.info.sizes.withFrame.width}" x ${fileInfo.info.sizes.withFrame.height}"`}</div>
                  </>
                ) : (
                  <div>{`${fileInfo.info.sizes.width}" x ${fileInfo.info.sizes.length}" x ${fileInfo.info.sizes.height}"`}</div>
                )}
                <div className="font-bold mt-5 mb-2">Prix</div>
                <div className="flex items-center">
                  Valeur :{" "}
                  <div className="ml-1 font-bold">{fileInfo.price.worth} $</div>
                </div>
                <div className="flex items-center">
                  Prix demandé :
                  <div className="ml-1 font-bold">{fileInfo.price.asked} $</div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
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
