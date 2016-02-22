import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import BluprintCard from '../components/bluprint-card'
import Breadcrumb from '../components/breadcrumb'
import Loading from '../components/loading'
import TopBar from '../components/zooids/top-bar'
import { Page } from '../components/page'

import { fetchBluprints, fetchBluprintsByCollectionId } from '../actions/bluprint-actions'

export default class Collection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { dispatch, collection, location } = this.props
    let { tags } = location.query
    dispatch(fetchBluprintsByCollectionId(collection.id, tags))
  }

  componentWillUnmount() {
    let { dispatch } = this.props
    dispatch(fetchBluprints())
  }

  render() {
    const { collection, bluprints, location } = this.props
    const { tags } = location.query
    const { items } = bluprints

    if (!items.length)  {
      return <div>There are no Bluprints for <em>{collection.label}</em></div>
    }


    let breadcrumbFragments = [
      { label: 'Home', linkTo: '/' },
      { label: collection.label }
    ]

    let showMore = null

    if(tags){
      breadcrumbFragments = [
        { label: 'Home', linkTo: '/' },
        { label: collection.label, linkTo: `/collections/${collection.id}` },
        { label: tags }
      ]
      showMore = <Link to={`/tags/${tags}`}> Show More </Link>
    }

    let bluprintCards = _.map(items, (bluprint)=>
      <BluprintCard
        bluprint={bluprint}
        collectionId={collection.id}
        key={bluprint.id}
      />
    )

    return <Page>
      <TopBar>
        <Breadcrumb fragments={breadcrumbFragments} />
      </TopBar>
      <div className="BluprintCard-container">{bluprintCards}</div>
      {showMore}
    </Page>
  }
}

function mapStateToProps({router, collections, bluprints}) {
  const {collectionId} = router.params
  const collection = _.find(collections.items, {id: collectionId})

  return {collection, bluprints}
}

export default connect(mapStateToProps)(Collection)
