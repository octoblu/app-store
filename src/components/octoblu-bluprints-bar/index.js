import React, { PropTypes } from 'react'
import PageBar from '../page-bar'
import PageBarNav from '../page-bar-nav'
import PageBarActions from '../page-bar-actions'

const BluprintsBar = ( ) => {
  return <PageBar>
    <PageBarNav>
      <a className="PageBar-navLink" href="/bluprints">My Bluprints</a>
      <a className="PageBar-navLink" href="/discover">Discover Bluprints</a>
      <a className="PageBar-navLink PageBar-navLink--active" href="/discover">Citrix App Store</a>
    </PageBarNav>
    <PageBarActions>
    </PageBarActions>
  </PageBar>
}

export default BluprintsBar
