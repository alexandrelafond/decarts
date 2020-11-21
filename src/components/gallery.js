import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ImgSrc from "../images/_L104587.jpg"

const Gallery = () => {
  return (
    <ul className="grid grid-cols-1 gap-6 m-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <img src={ImgSrc} alt="" />
      <img src={ImgSrc} alt="" />
      <img src={ImgSrc} alt="" />
      <img src={ImgSrc} alt="" />
      <img src={ImgSrc} alt="" />
      <img src={ImgSrc} alt="" />
      <img src={ImgSrc} alt="" />
    </ul>
  )
}

export default Gallery

// {images.map(image => (
//   <Link key={image.id} to={`collection/${image.id}`}>
//     <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow">
//       <img src={ImgSrc} alt="" />
//     </li>
//   </Link>
// ))}
