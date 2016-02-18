import React, { PropTypes } from 'react'
import './index.css'

const PageBar = ({children}) => {
  return <header className="PageBar">
    {children}
  </header>
}

PageBar.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageBar
