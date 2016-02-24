import React, { Component } from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'

import '../styles/handglide/fonts.css'
import '../styles/base.css'

import AppBar from '../components/zooids/app-bar'
import { OCTOBLU_URL } from '../constants'

export default class Layout extends Component {
  render() {
    let { context } = this.props
    return <div>
      <AppBar octobluUrl={OCTOBLU_URL} context={context}/>
      {this.props.children}
    </div>
  }
}

function mapStateToProps({ context }) {
  return { context }
}

export default connect(mapStateToProps)(Layout)
