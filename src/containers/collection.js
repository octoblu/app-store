import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Page, PageHeader, PageTitle } from '../components/page'
import Loading from '../components/loading'

import BluprintCard from '../components/bluprint-card'
import Breadcrumb from '../components/breadcrumb'

import { fetchBluprints, fetchBluprintsByCollectionId } from '../actions/bluprint-actions'

export default class Collection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { dispatch, collection } = this.props
    dispatch(fetchBluprintsByCollectionId(collection.id))
  }

  componentWillUnmount() {
    let { dispatch } = this.props
    dispatch(fetchBluprints())
  }

  render() {
    const { collection, bluprints } = this.props
    const { items } = bluprints

    if (!items.length)  {
      return <div>There are no Bluprints for <em>{collection.label}</em></div>
    }

    const breadcrumbFragments = [
      { label: 'Home', linkTo: '/' },
      { label: collection.label }
    ]
    
    let bluprintCards = _.map(items, (bluprint)=>
      <BluprintCard
        bluprint={bluprint}
        collectionId={collection.id}
        key={bluprint.id}
      />
    )

    return <Page>
      <Breadcrumb fragments={breadcrumbFragments} />
      <PageHeader>
        <PageTitle>{collection.label} Apps</PageTitle>
      </PageHeader>

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
