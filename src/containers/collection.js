import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import CollectionBreadcrumb from '../components/collection-breadcrumb'
import Loading from '../components/loading'

export default class Collections extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {collection} = this.props

    return <div>
      <CollectionBreadcrumb collectionName={collection.label} />
    </div>
  }
}

function mapStateToProps({router, collections}) {
  const {collectionId} = router.params
  const collection = _.find(collections.items, {id: collectionId})

  return {collection, collections}
}

export default connect(mapStateToProps)(Collections)
