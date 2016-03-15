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
    const { dispatch, collection, location } = this.props
    const { tag } = location.query
    dispatch(fetchBluprintsByCollectionId(collection.id, tag))
  }

  componentWillReceiveProps(nextProps) {
    const { tag }                  = this.props.location.query
    const { dispatch, collection } = nextProps
    const nextTag                  = nextProps.location.query.tag

    if (tag == nextTag) return

    dispatch(fetchBluprintsByCollectionId(collection.id, nextTag))
  }

  componentWillUnmount() {
    const { dispatch } = this.props
    dispatch(fetchBluprints())
  }

  breadcrumbFragments() {
    const { collection } = this.props
    const { tag }        = this.props.location.query

    let breadcrumbFragments = [
      { label: 'Home', linkTo: '/' },
      { label: collection.label }
    ]

    if (tag) {
      breadcrumbFragments[1].linkTo = `/collections/${collection.id}`
      breadcrumbFragments[2] = { label: _.capitalize(tag) }
    }

    return breadcrumbFragments
  }

  renderShowMore() {
    const { tag } = this.props.location.query

    if (!tag) return null

    return <div className="Tags-showAllBtn">
      <Link to={`/tags/${tag}`} key={tag}>
        Show All {_.capitalize(tag)} Bluprints
      </Link>
    </div>
  }

  render() {
    const { collection, bluprints } = this.props
    const { items } = bluprints

    if (!items.length)  {
      return <div>There are no Bluprints for <em>{collection.label}</em></div>
    }

    const bluprintCards = _.map(items, (bluprint) =>
      <BluprintCard
        bluprint={bluprint}
        collectionId={collection.id}
        key={bluprint.id}
      />
    )

    return <Page>
      <TopBar>
        <Breadcrumb fragments={this.breadcrumbFragments()} />
      </TopBar>

      <div className="BluprintCard-container">{bluprintCards}</div>

      {this.renderShowMore()}
    </Page>
  }
}

function mapStateToProps({collections, bluprints}, props) {
  const {collectionId} = props.params
  const collection     = _.find(collections.items, {id: collectionId})

  return {collection, bluprints}
}

export default connect(mapStateToProps)(Collection)
