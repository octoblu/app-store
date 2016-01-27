import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Page, PageHeader, PageTitle } from '../components/page'

import BluprintCard from '../components/bluprint-card'
import Breadcrumb from '../components/breadcrumb'

import {fetchBluprints} from '../actions/bluprint-actions'

export default class Collection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let {dispatch} = this.props
    dispatch(fetchBluprints())
  }

  render() {
    const {collection, bluprints} = this.props
    const { items } = bluprints
    const breadcrumbFragments = [
      { label: 'Collections', linkTo: '/' },
      { label: collection.label }
    ]

    if (!items.length) return <div>There are no Bluprints for <em>{collection.label}</em></div>

    const bluprintCards = _.map(items, (bluprint)=>
      <BluprintCard
        bluprint={bluprint}
        key={bluprint.id}
      />
    )

    return <Page>
      <Breadcrumb fragments={breadcrumbFragments} />

      <div className="BluprintCard-container">
        {bluprintCards}
      </div>
    </Page>
  }
}

function mapStateToProps({router, collections, bluprints}) {
  const {collectionId} = router.params
  const collection = _.find(collections.items, {id: collectionId})

  return {collection, bluprints}
}

export default connect(mapStateToProps)(Collection)
