import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Item from "./item"
import files from "../helpers/files"

const Gallery = props => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        totalCount
        nodes {
          id
          name
          childImageSharp {
            fixed(width: 300, height: 300) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  return (
    <ul className="grid grid-cols-1 gap-6 m-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.allFile.nodes.map(node => {
        const fileInfo = files.find(file => file.fileName === node.name)
        return <Item key={node.id} file={node} fileInfo={fileInfo} />
      })}
    </ul>
  )
}

export default Gallery
