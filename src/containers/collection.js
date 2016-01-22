import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import CollectionBluprints from '../components/collection-bluprints'
import CollectionBreadcrumb from '../components/collection-breadcrumb'
import Loading from '../components/loading'

import {fetchBluprints} from '../actions/bluprint-actions'

export default class Collection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(fetchBluprints())
  }

  render() {
    const {collection, bluprints} = this.props

    if (!bluprints.items.length) return <div>There are no Bluprints for <em>{collection.name}</em></div>

    return <div>
      <CollectionBreadcrumb collectionName={collection.label} />
      <CollectionBluprints bluprints={bluprints.items} />
    </div>
  }
}

function mapStateToProps({router, collections, bluprints}) {
  const {collectionId} = router.params
  const collection = _.find(collections.items, {id: collectionId})

  return {collection, bluprints}
}

export default connect(mapStateToProps)(Collection)
