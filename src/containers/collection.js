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
    let { dispatch, collection, location } = nextProps
    if(tag != location.query.tag){
      dispatch(fetchBluprintsByCollectionId(collection.id, location.query.tag))
    }
  }

  componentWillUnmount() {
    let { dispatch } = this.props
    dispatch(fetchBluprints())
  }



  render() {
    const { collection, bluprints } = this.props
    const { items } = bluprints

    const { tag } = this.props.location.query

    if (!items.length)  {
      return <div>There are no Bluprints for <em>{collection.label}</em></div>
    }

    let bluprintCards = _.map(items, (bluprint)=>
      <BluprintCard
      bluprint={bluprint}
      collectionId={collection.id}
      key={bluprint.id}
      />
    )

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
