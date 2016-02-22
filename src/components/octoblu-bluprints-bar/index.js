import React, { PropTypes } from 'react'
import TopBar from '../zooids/top-bar'
import PageBarNav from '../page-bar-nav'

const BluprintsNavBar = ({octobluUrl}) => {
  return <TopBar>
    <PageBarNav>
      <a className="PageBar-navLink" href={`${octobluUrl}/bluprints`}>My Bluprints</a>
      <a className="PageBar-navLink" href={`${octobluUrl}/discover`}>Discover Bluprints</a>
      <a className="PageBar-navLink PageBar-navLink--active" href="//store.octoblu.com">Citrix App Store</a>
    </PageBarNav>
  </TopBar>
}

export default BluprintsNavBar
