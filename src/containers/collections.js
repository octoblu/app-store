import React, { Component } from 'react'
import { connect } from 'react-redux'

import BluprintsBar from '../components/octoblu-bluprints-bar'
import CollectionCard from '../components/collection-card'
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
    let { items } = this.props.collections
    let collectionCards = _.map(items, (collection) =>
      <CollectionCard
        collection={collection}
        key={collection.id}/>
    )

    return <Page className="Collections">
      <BluprintsBar octobluUrl={OCTOBLU_URL} />
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
