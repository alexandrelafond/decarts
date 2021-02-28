import PropTypes from "prop-types"
import React, { useMemo, memo } from "react"
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

  const sortByFileName = (array, startIndex) => {
    return array.sort((a, b) => {
      const firstName = parseInt(a.name.substring(startIndex, a.name.length))
      const secondName = parseInt(b.name.substring(startIndex, b.name.length))
      if (firstName < secondName) return -1
      if (firstName > secondName) return 1
      return 0
    })
  }

  const sculptures = useMemo(
    () => data.allFile.nodes.filter(node => node.name.includes("S")),
    []
  )
  const paintings = useMemo(
    () => data.allFile.nodes.filter(node => !node.name.includes("S")),
    []
  )

  return (
    <ul className="grid grid-cols-1 gap-6 m-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sortByFileName(paintings, 3).map(node => {
        const fileInfo = files.find(file => file.fileName === node.name)
        return <Item key={node.id} file={node} fileInfo={fileInfo} />
      })}
      {sortByFileName(sculptures, 4).map(node => {
        const fileInfo = files.find(file => file.fileName === node.name)
        return <Item key={node.id} file={node} fileInfo={fileInfo} />
      })}
    </ul>
  )
}

export default memo(Gallery)
