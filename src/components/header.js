import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => {
  const aboutIsActive =
    typeof window !== "undefined" && window.location.pathname === "/about/"
  return (
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
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium text-gray-900 ${
                  aboutIsActive && "border-indigo-500"
                }`}
              >
                À propos
              </Link>
            </div>
          </div>
          <div className="ml-6 flex items-center">
            <a
              className="inline-flex items-center p-2 border border-green-400 text-sm font-bold text-green-400 rounded-md hover:bg-green-400 hover:text-white"
              href={"mailto:" + "jacquesdespres@sympatico.ca"}
            >
              Nous écrire
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
