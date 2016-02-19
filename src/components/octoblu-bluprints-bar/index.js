import React, { PropTypes } from 'react'
import PageBar from '../page-bar'
import PageBarNav from '../page-bar-nav'

const BluprintsNavBar = ( {octobluUrl} ) => {
  return <PageBar>
    <PageBarNav>
      <a className="PageBar-navLink" href={`${octobluUrl}/bluprints`}>My Bluprints</a>
      <a className="PageBar-navLink" href={`${octobluUrl}/discover`}>Discover Bluprints</a>
      <a className="PageBar-navLink PageBar-navLink--active" href="//store.octoblu.com">Citrix App Store</a>
    </PageBarNav>
  </PageBar>
}

export default BluprintsNavBar
