import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import CollectionBluprints from '../components/collection-bluprints'
import Loading from '../components/loading'

import {fetchBluprint} from '../actions/bluprint-actions'

export default class Bluprint extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch, bluprintId } = this.props
    console.log('FETCH~!!!!!', bluprintId);
    dispatch(fetchBluprint(bluprintId))
  }

  render() {
    const { bluprint } = this.props

    if (!bluprint) return <div>No Bluprint Found!</div>

    return <div>
      <CollectionBluprints bluprint={bluprint} />
    </div>
  }
}

function mapStateToProps({ router }) {
  const { bluprintId } = router.params
  return { bluprintId }
}

export default connect(mapStateToProps)(Bluprint)
