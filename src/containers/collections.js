import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import CollectionCard from '../components/collection-card'
import AppBar from '../components/app-bar'
import BluAppBar from '../components/octoblu-app-bar'
import BluprintsBar from '../components/octoblu-bluprints-bar'
import { Page } from '../components/page'
import { Hero, HeroTitle, HeroSubTitle } from '../components/hero'

import { fetchCollections } from '../actions/collection-actions'

export default class Collections extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { dispatch } = this.props
    dispatch(fetchCollections())
  }

  render() {
    let { items } = this.props.collections
    let collectionCards = _.map(items, (collection) =>
      <CollectionCard
        collection={collection}
        key={collection.id}/>
    )

    return <Page className="Collections">
      <BluAppBar />
      <BluprintsBar />

      <Hero>
        <HeroTitle>Automation App Store</HeroTitle>
        <HeroSubTitle>Explore. Automate. Empower.</HeroSubTitle>
      </Hero>

      <div className="CollectionCard-container">{collectionCards}</div>
    </Page>
  }
}

function mapStateToProps({collections}) {
  return {collections}
}

export default connect(mapStateToProps)(Collections)
