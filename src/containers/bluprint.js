import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import BluprintDetail from '../components/bluprint-detail'
import Breadcrumb from '../components/breadcrumb'
import TopBar from '../components/zooids/top-bar'
import { Page } from '../components/page'

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
    const { bluprint, collection, context } = this.props

    if (!bluprint) return <div>No Bluprint Found!</div>
    if (!collection) return <div>No Collection Found!</div>

    const fragments = [
      { label: 'Home', linkTo: '/' },
      { label: collection.label, linkTo: `/collections/${collection.id}` },
      { label: bluprint.label }
    ]

    return <Page>
      <TopBar context={context}>
        <Breadcrumb fragments={fragments} />
      </TopBar>

      <BluprintDetail bluprint={bluprint} />
    </Page>
  }
}

function mapStateToProps({ router, bluprints, collections, context }) {
  const { bluprintId, collectionId } = router.params
  const bluprint = _.find(bluprints.items, {id: bluprintId})
  const collection = _.find(collections.items, {id: collectionId})

  return { bluprint, bluprintId, collection, context }
}

export default connect(mapStateToProps)(Bluprint)
