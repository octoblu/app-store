import React, { Component } from 'react'
import {Link} from 'react-router'

import '../styles/handglide/fonts.css'
import '../styles/base.css'

import AppBar from '../components/app-bar'


import Loading from '../components/loading'

export default class Layout extends Component {
  render() {
    return <div>
      <AppBar>
        <h1 className="Collections-title">Workspace Automation Powered by <strong>Octoblu</strong></h1>
        <a href="http://app.octoblu.com" className="Collections-link">Visit Octoblu</a>
      </AppBar>

      {this.props.children}
    </div>
  }
}
