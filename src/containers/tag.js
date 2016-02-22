import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import BluprintCard from '../components/bluprint-card'
import Breadcrumb from '../components/breadcrumb'
import Loading from '../components/loading'
import PageBar from '../components/page-bar'
import PageBarNav from '../components/page-bar-nav'
import { Page, PageHeader, PageTitle } from '../components/page'

import { fetchBluprints, fetchBluprintsByTagName } from '../actions/bluprint-actions'

export default class Tag extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    let { dispatch, tag } = this.props
    dispatch(fetchBluprintsByTagName(tag))
  }

  componentWillUnmount() {
    let { dispatch } = this.props
    dispatch(fetchBluprints())
  }

  render() {
    const { tag, bluprints } = this.props
    const { items } = bluprints

    if (!items.length)  {
      return <div>There are no Bluprints for <em>{tag}</em></div>
    }

    const breadcrumbFragments = [
      { label: 'Home', linkTo: '/' },
      { label: tag }
    ]

    let bluprintCards = _.map(items, (bluprint)=>
      <BluprintCard
        bluprint={bluprint}
        collectionId={bluprint.collectionIds[0]}
        key={bluprint.id}
      />
    )

    return <Page>
      <PageBar>
        <Breadcrumb fragments={breadcrumbFragments} />
      </PageBar>
      <PageTitle>Showing {tag} Bluprints</PageTitle>
      <div className="BluprintCard-container">{bluprintCards}</div>
    </Page>
  }
}

function mapStateToProps({router, bluprints}) {
  const {tag} = router.params

  return {tag, bluprints}
}

export default connect(mapStateToProps)(Tag)
