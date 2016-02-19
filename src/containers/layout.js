import React, { Component } from 'react'
import {Link} from 'react-router'

import '../styles/handglide/fonts.css'
import '../styles/base.css'

import BluAppBar from '../components/octoblu-app-bar'
import { OCTOBLU_URL } from '../constants'

export default class Layout extends Component {
  render() {
    return <div>
      <BluAppBar octobluUrl={OCTOBLU_URL} />
      {this.props.children}
    </div>
  }
}
