import React, { PropTypes } from 'react'
import { Fixed } from 'react-layout-pane'

import './index.css'

import Button from '../button'

const TopBar = ({ children }) => {
  return <Fixed className="TopBar">{children}</Fixed>
}

TopBar.propTypes = {
  children: PropTypes.node
}

export default TopBar
