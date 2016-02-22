import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import BluprintCard from '../components/bluprint-card'
import Breadcrumb from '../components/breadcrumb'
import Loading from '../components/loading'
import PageBar from '../components/page-bar'
import PageBarNav from '../components/page-bar-nav'
import { Page, PageHeader, PageTitle } from '../components/page'

import { fetchBluprints, fetchBluprintsByCollectionId } from '../actions/bluprint-actions'

export default class Collection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { dispatch, collection, tag } = this.props
    dispatch(fetchBluprintsByCollectionId(collection.id, tag))
  }

  componentWillUnmount() {
    let { dispatch } = this.props
    dispatch(fetchBluprints())
  }

  render() {
    const { collection, bluprints, tag } = this.props
    const { items } = bluprints

    if (!items.length)  {
      return <div>There are no Bluprints for <em>{collection.label}</em></div>
    }

    let breadcrumbFragments = [
      { label: 'Home', linkTo: '/' },
      { label: collection.label }
    ]

    if(tag){
      breadcrumbFragments = [
        { label: 'Home', linkTo: '/' },
        { label: collection.label, linkTo: `/collections/${collection.id}` },
        { label: tag }
      ]
    }

    let bluprintCards = _.map(items, (bluprint)=>
      <BluprintCard
        bluprint={bluprint}
        route={`/collections/${collection.id}`}
        key={bluprint.id}
      />
    )

    return <Page>
      <PageBar>
        <Breadcrumb fragments={breadcrumbFragments} />
      </PageBar>
      <div className="BluprintCard-container">{bluprintCards}</div>
    </Page>
  }
}

function mapStateToProps({router, collections, bluprints}) {
  console.log(router);
  const {collectionId, tag} = router.params
  const collection = _.find(collections.items, {id: collectionId})

  return {collection, tag, bluprints}
}

export default connect(mapStateToProps)(Collection)
