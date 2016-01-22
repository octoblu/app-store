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
    return <div>
      <CollectionBreadcrumb collectionName={this.props.collectionId} />
    </div>
  }
}

function mapStateToProps({router}) {
  const {collectionId} = router.params
  return {collectionId}
}

export default connect(mapStateToProps)(Collections)
