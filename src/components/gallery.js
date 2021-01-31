import PropTypes from "prop-types"
import React, { useCallback, memo } from "react"
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
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  const sortFilesByName = useCallback(files => {
    return files.sort((a, b) => {
      const firstName = parseInt(a.name.substring(3, a.name.length))
      const secondName = parseInt(b.name.substring(3, b.name.length))
      if (firstName < secondName) return -1
      if (firstName > secondName) return 1
      return 0
    })
  }, [])

  return (
    <ul className="grid grid-cols-1 gap-6 m-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sortFilesByName(data.allFile.nodes).map(node => {
        const fileInfo = files.find(file => file.name === node.name)
        return <Item key={node.id} file={node} fileInfo={fileInfo} />
      })}
    </ul>
  )
}

export default memo(Gallery)
