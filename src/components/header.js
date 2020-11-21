import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <nav className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <h2 className="mb-0">{siteTitle}</h2>
            </Link>
          </div>
          <div className="-my-px ml-6 flex space-x-8">
            <Link
              to="/about/"
              className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium text-gray-900"
            >
              À propos
            </Link>
          </div>
        </div>
        <div className="ml-6 flex items-center">
          <a
            className="inline-flex items-center p-2 border border-green-500 text-sm font-bold text-gray-900 rounded-md hover:bg-green-500 hover:text-white"
            href={"mailto:" + "jacquesdespres@sympatico.ca"}
          >
            Nous écrire
          </a>
        </div>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// <header className="px-4 py-6 sm:px-6">
// <div className="flex items-center">
//   <h1>
//     <Link to="/">{siteTitle}</Link>
//   </h1>
//   <div className="flex flex-1 justify-between">
//     <div className="flex ml-12 space-x-4">
//       <Link to="/about/" className="hover:underline">
//         À propos
//       </Link>
//     </div>
//     <a
//       className="underline font-bold"
//       href={"mailto:" + "jacquesdespres@sympatico.ca"}
//     >
//       Nous écrire
//     </a>
//   </div>
// </div>
// </header>
