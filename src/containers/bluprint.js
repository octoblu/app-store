import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { Page } from '../components/page'
import BluprintDetail from '../components/bluprint-detail'
import Breadcrumb from '../components/breadcrumb'

import {fetchBluprints} from '../actions/bluprint-actions'

export default class Bluprint extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchBluprints())
  }

  render() {
    const { bluprint } = this.props
    const fragments = [
      { label: 'Browse Apps', linkTo: '/' },
      { label: bluprint.label }
    ]

    if (!bluprint) return <div>No Bluprint Found!</div>

    return <Page>
      <Breadcrumb fragments={fragments} />
      <BluprintDetail bluprint={bluprint} />
    </Page>
  }
}

function mapStateToProps({ router, bluprints }) {
  const { bluprintId } = router.params
  const bluprint = _.find(bluprints.items, {id: bluprintId})
  return { bluprint, bluprintId }
}

export default connect(mapStateToProps)(Bluprint)
