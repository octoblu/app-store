import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Page } from '../components/page'
import BluprintDetail from '../components/bluprint-detail'
import Breadcrumb from '../components/breadcrumb'

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
    const { bluprint, collection } = this.props

    if (!bluprint) return <div>No Bluprint Found!</div>
    if (!collection) return <div>No Collection Found!</div>

    const fragments = [
      { label: 'Home', linkTo: '/' },
      { label: collection.label, linkTo: `/collections/${collection.id}` },
      { label: bluprint.label }
    ]

    return <Page>
      <Breadcrumb fragments={fragments} />
      <BluprintDetail bluprint={bluprint} />
    </Page>
  }
}

function mapStateToProps({ router, bluprints, collections }) {
  const { bluprintId, collectionId } = router.params
  const bluprint = _.find(bluprints.items, {id: bluprintId})
  const collection = _.find(collections.items, {id: collectionId})

  return { bluprint, bluprintId, collection }
}

export default connect(mapStateToProps)(Bluprint)
