import React, { PropTypes } from 'react'
import './index.css'

const TopBar = ({children}) => {
  return <header className="TopBar">
    {children}
  </header>
}

TopBar.propTypes = {
  children: PropTypes.node.isRequired
}

export default TopBar
