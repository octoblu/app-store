import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import '../styles/handglide/fonts.css'
import '../styles/base.css'

import AppBar from '../components/zooids/app-bar'
import { OCTOBLU_URL } from '../constants'

import { setContext } from '../actions/context-actions'

export default class CWCLayout extends Component {
  componentDidMount() {
    let { dispatch } = this.props
    dispatch(setContext('cwc'))
  }

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

export default connect(mapStateToProps)(CWCLayout)
