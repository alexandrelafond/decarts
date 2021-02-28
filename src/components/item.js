import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Item = ({ file, fileInfo }) => {
  return (
    <>
      {fileInfo && fileInfo.sold === false && (
        <li key={file.id} className="text-center">
          <Link to={`gallery/${file.id}`}>
            <h3>{file.name}</h3>
            <Img fixed={file.childImageSharp.fixed} />
          </Link>
        </li>
      )}
    </>
  )
}

export default Item
