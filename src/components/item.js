import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"

const Item = ({ file, fileInfo }) => {
  return (
    <li key={file.id}>
      <Link to={`gallery/${file.id}`}>
        {fileInfo && (
          <>
            <h3>{`${fileInfo.artist.name} (${fileInfo.artist.origin})`}</h3>
            <p>{`${fileInfo.painting.title} (${fileInfo.painting.year})`}</p>
          </>
        )}
        {!fileInfo && <h3>{file.name}</h3>}
        <Img fixed={file.childImageSharp.fixed} />
      </Link>
    </li>
  )
}

export default Item
