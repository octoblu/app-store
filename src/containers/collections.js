import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import CollectionNav from '../components/collection-nav'
import Loading from '../components/loading'

import {fetchCollections} from '../actions/collection-actions'

export default class Collections extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { dispatch } = this.props
    dispatch(fetchCollections())
  }

  render() {
    let {collections} = this.props

    return <div>
      <h1>Automation App Store</h1>
      <CollectionNav items={collections.items}/>
    </div>
  }
}

function mapStateToProps({collections}) {
  return {collections}
}

export default connect(mapStateToProps)(Collections)
