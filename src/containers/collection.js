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

  render() {
    const { collection, bluprints, location } = this.props
    const { tag } = location.query
    const { items } = bluprints

    if (!items.length)  {
      return <div>There are no Bluprints for <em>{collection.label}</em></div>
    }


    let breadcrumbFragments = [
      { label: 'Home', linkTo: '/' },
      { label: collection.label }
    ]

    let showMore = null

    if(tag){
      breadcrumbFragments = [
        { label: 'Home', linkTo: '/' },
        { label: collection.label, linkTo: `/collections/${collection.id}` },
        { label: _.capitalize(tag) }
      ]
      showMore = <div className="Tags-showAllBtn"><Link to={`/tags/${tag}`} key={tag}>Show All {_.capitalize(tag)} Bluprints</Link></div>
    }

    let bluprintCards = _.map(items, (bluprint, index)=>
      <BluprintCard
        bluprint={bluprint}
        collectionId={collection.id}
        key={index}
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
