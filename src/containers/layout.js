import React, { Component } from 'react'
import {Link} from 'react-router'

import '../styles/handglide/fonts.css'
import '../styles/base.css'

import BluAppBar from '../components/octoblu-app-bar'

export default class Layout extends Component {
  render() {
    return <div>
      <BluAppBar />
      {this.props.children}
    </div>
  }
}
