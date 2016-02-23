import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import BluprintCard from '../components/bluprint-card'
import Breadcrumb from '../components/breadcrumb'
import TopBar from '../components/zooids/top-bar'
import { Page } from '../components/page'

import { fetchBluprints, fetchBluprintsByCollectionId } from '../actions/bluprint-actions'

export default class Collection extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { dispatch, collection, location } = this.props
    let { tag } = location.query
    dispatch(fetchBluprintsByCollectionId(collection.id, tag))
  }

  componentWillReceiveProps(nextProps) {
    let { tag } = this.props.location.query
    if(tag != nextProps.location.query.tag){
      let { dispatch, collection } = nextProps
      dispatch(fetchBluprints())
      dispatch(fetchBluprintsByCollectionId(collection.id, nextProps.location.query.tag))
    }
  }

  componentWillUnmount() {
    let { dispatch } = this.props
    dispatch(fetchBluprints())
  }

  generateBluprintCards() {
    let { bluprints, collection } = this.props
    let { items } = bluprints

    const cards = _.map(items, (bluprint)=>
      <BluprintCard
      bluprint={bluprint}
      collectionId={collection.id}
      key={bluprint.id}
      />
    )
    return cards
  }

  render() {
    const { collection, bluprints, location } = this.props
    const { tag } = location.query
    const { items } = bluprints

    if (!items.length)  {
      return <div>There are no Bluprints for <em>{collection.label}</em></div>
    }

    let showMore = null
    let breadcrumbFragments = [
      { label: 'Home', linkTo: '/' },
      { label: collection.label }
    ]

    if(tag){
      breadcrumbFragments[1].linkTo = `/collections/${collection.id}`
      breadcrumbFragments[2] = { label: _.capitalize(tag) }
      showMore = <div className="Tags-showAllBtn"><Link to={`/tags/${tag}`} key={tag}>Show All {_.capitalize(tag)} Bluprints</Link></div>
    }

    return <Page>
      <TopBar>
        <Breadcrumb fragments={breadcrumbFragments} />
      </TopBar>

      <div className="BluprintCard-container">{this.generateBluprintCards()}</div>
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
