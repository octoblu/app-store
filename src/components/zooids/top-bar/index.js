import React, { Component, PropTypes } from 'react'
import './index.css'

export default class TopBar extends Component {
  render() {
    const {children, context} = this.props
    // if (context !== 'octoblu') return null

    return <header className="TopBar">
    {children}
    </header>
  }
}

TopBar.propTypes = {
  children: PropTypes.node.isRequired,
  context: React.PropTypes.string
}
