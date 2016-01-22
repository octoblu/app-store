import React, { Component } from 'react'
import {Link} from 'react-router'

import '../styles/base.css'

import Loading from '../components/loading'

export default class Layout extends Component {
  render() {
    return <div>
      <nav>
        <Link to="/">Index</Link>
        <Link to="/collection/epic-collection">Epic Collection</Link>
        <Link to="/bluprints/bluprint-awesome">Bluprint, Awesome</Link>
      </nav>

      {this.props.children}
    </div>
  }
}
