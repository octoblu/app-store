import React, { Component } from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'

import '../styles/handglide/fonts.css'
import '../styles/base.css'

import AppBar from '../components/zooids/app-bar'
import { OCTOBLU_URL } from '../constants'

export default class Layout extends Component {
  render() {
    const { context } = this.props


    let appBar = <AppBar octobluUrl={ OCTOBLU_URL }/>
    if (context !== 'octoblu') appBar = null

    return <div>
      { appBar }
      { this.props.children }
    </div>
  }
}

function mapStateToProps({ context }) {
  return { context }
}

export default connect(mapStateToProps)(Layout)
