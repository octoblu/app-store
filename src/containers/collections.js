import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../components/button'
import BluprintsBar from '../components/octoblu-bluprints-bar'
import CollectionCard from '../components/collection-card'
import TopBar from '../components/zooids/top-bar'
import TopBarNav from '../components/zooids/top-bar-nav'
import { Page } from '../components/page'
import { Hero, HeroTitle, HeroSubTitle } from '../components/hero'

import { OCTOBLU_URL } from '../constants'
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
    let { collections, context } = this.props
    let { items } = collections

    let collectionCards = _.map(items, (collection) =>
      <CollectionCard
        collection={collection}
        key={collection.id}/>
    )

    let topBar = null
    if (context === 'octoblu') {
      topBar = <TopBar>
        <TopBarNav>
          <a className="TopBarNav-link" href={`${OCTOBLU_URL}/bluprints`}>My Bluprints</a>
          <a className="TopBarNav-link" href={`${OCTOBLU_URL}/discover`}>Discover Bluprints</a>
          <a className="TopBarNav-link TopBarNav-link--active" href="//store.octoblu.com">Citrix App Store</a>
        </TopBarNav>
      </TopBar>
    }

    return <Page className="Collections">
      {topBar}


      <Hero>
        <HeroTitle>Automation App Store</HeroTitle>
        <HeroSubTitle>Explore. Automate. Empower.</HeroSubTitle>
        <Button href={OCTOBLU_URL} className="Hero-floatingButton" kind="hollow-neutral" size="small">Visit Octoblu</Button>
      </Hero>

      <div className="CollectionCard-container">{collectionCards}</div>
    </Page>
  }
}

function mapStateToProps({collections, context}) {
  return {collections, context}
}

export default connect(mapStateToProps)(Collections)
