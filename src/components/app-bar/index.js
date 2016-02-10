import React, { PropTypes } from 'react'
import { Fixed } from 'react-layout-pane'

import './index.css'

import Button from '../button'

const AppBar = ({ children }) => {
  return <Fixed className="AppBar">{children}</Fixed>
}

AppBar.propTypes = {
  children: PropTypes.node
}

export default AppBar
