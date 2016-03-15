import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

import '../styles/handglide/fonts.css'
import '../styles/base.css'

import Spinner from '../components/spinner'

import { setContext } from '../actions/context-actions'

export default class ContextHandler extends Component {
  componentDidMount() {
    let { dispatch, params } = this.props
    let { context } = params
    dispatch(setContext(context))
    dispatch(replace('/'))
  }

  render() {
    return <Spinner />
  }
}


function mapStateToProps({context}) {
  return {context, replaceState}
}

export default connect(mapStateToProps)(ContextHandler)
