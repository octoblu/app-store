import React, { Component } from 'react'
import {Link} from 'react-router'

import '../styles/handglide/fonts.css'
import '../styles/base.css'

export default class Layout extends Component {
  render() {
    return <div className="CWCLayout">
      {this.props.children}
    </div>
  }
}
