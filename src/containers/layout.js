import React, { Component } from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'

import '../styles/handglide/fonts.css'
import '../styles/base.css'

import AppBar from '../components/zooids/app-bar'
import {OCTOBLU_URL} from '../constants'

class Layout extends Component {
  render() {
    const {context} = this.props

    let appBar = null
    if (context === 'octoblu') appBar = <AppBar octobluUrl={ OCTOBLU_URL }/>

    return <div>
      {appBar}
      {this.props.children}
    </div>
  }
}

function mapStateToProps({context}) {
  return {context}
}

export default connect(mapStateToProps)(Layout)
