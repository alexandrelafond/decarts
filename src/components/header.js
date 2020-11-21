import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="px-4 py-6 sm:px-6">
    <div className="flex items-center">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div className="flex flex-1 justify-between">
        <div className="flex ml-12 space-x-4">
          <Link to="/about/" className="hover:underline">
            À propos
          </Link>
        </div>
        <a
          className="underline font-bold"
          href={"mailto:" + "jacquesdespres@sympatico.ca"}
        >
          Nous écrire
        </a>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
