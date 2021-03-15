import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
}
