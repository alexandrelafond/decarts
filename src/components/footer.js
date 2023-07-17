import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <footer className="bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center md:order-2 text-gray-500">
        Site internet par
        <a href={"mailto:" + "info.alafond@gmail.com"} className="pl-1">
          LG2
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-base text-gray-500 mb-0">
          {`© ${new Date().getFullYear()} Decarts.ca`}
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
