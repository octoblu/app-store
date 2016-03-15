import React, {Component} from 'react'
import {browserHistory, Link} from 'react-router'
import {connect} from 'react-redux'

import '../styles/handglide/fonts.css'
import '../styles/base.css'

import Spinner from '../components/spinner'

import {setContext} from '../actions/context-actions'

export default class ContextHandler extends Component {
  componentDidMount() {
    let {dispatch, params} = this.props
    let {context}          = params

    dispatch(setContext(context))
    browserHistory.replace('/')
  }

  render() {
    return <Spinner />
  }
}


function mapStateToProps({context}) {
  return {context}
}

export default connect(mapStateToProps)(ContextHandler)
