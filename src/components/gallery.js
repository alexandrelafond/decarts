import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImgSrc from "../images/_L104587.jpg"

const images = [
  { id: 1, component: <img src={ImgSrc} alt="" /> },
  { id: 2, component: <img src={ImgSrc} alt="" /> },
  { id: 3, component: <img src={ImgSrc} alt="" /> },
  { id: 4, component: <img src={ImgSrc} alt="" /> },
  { id: 5, component: <img src={ImgSrc} alt="" /> },
  { id: 6, component: <img src={ImgSrc} alt="" /> },
  { id: 7, component: <img src={ImgSrc} alt="" /> },
  { id: 8, component: <img src={ImgSrc} alt="" /> },
  { id: 9, component: <img src={ImgSrc} alt="" /> },
]

const Gallery = () => {
  return (
    <ul className="grid grid-cols-1 gap-6 m-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map(image => (
        <li key={image.id}>
          <Link to={`gallery/${image.id}`}>{image.component}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Gallery
