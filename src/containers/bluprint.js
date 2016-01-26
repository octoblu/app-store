import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import CollectionBluprints from '../components/collection-bluprints'
import Loading from '../components/loading'

import {fetchBluprints} from '../actions/bluprint-actions'

export default class Bluprint extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchBluprints())
  }

  render() {
    const { bluprint } = this.props

    if (!bluprint) return <div>No Bluprint Found!</div>
    return <div>BLUPRINT</div>
  }
}

function mapStateToProps({ router, bluprints }) {
  const { bluprintId } = router.params
  const bluprint = _.find(bluprints.items, {id: bluprintId})
  return { bluprint, bluprintId }
}

export default connect(mapStateToProps)(Bluprint)
