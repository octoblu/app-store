import React, { PropTypes } from 'react'
import TopBar from '../zooids/top-bar'
import TopBarNav from '../zooids/top-bar-nav'

const BluprintsNavBar = ({octobluUrl}) => {
  return <TopBar>
    <TopBarNav>
      <a className="TopBarNav-link" href={`${octobluUrl}/bluprints`}>My Bluprints</a>
      <a className="TopBarNav-link" href={`${octobluUrl}/discover`}>Discover Bluprints</a>
      <a className="TopBarNav-link TopBarNav-link--active" href="//store.octoblu.com">Citrix App Store</a>
    </TopBarNav>
  </TopBar>
}

export default BluprintsNavBar
