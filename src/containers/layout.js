import React, { Component } from 'react'
import {Link} from 'react-router'

import '../styles/base.css'

import Loading from '../components/loading'

export default class Layout extends Component {
  render() {
    return <div>{this.props.children}</div>
  }
}
