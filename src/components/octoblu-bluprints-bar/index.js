import React, { PropTypes } from 'react'
import TopBar from '../zooids/top-bar'
import TopBarNav from '../zooids/top-bar-nav'

const BluprintsNavBar = ({octobluUrl}) => {
  return <TopBar>
    <TopBarNav>
      <a className="TopBarNav-link" href={`${octobluUrl}/bluprints`}>My Bluprints</a>
      <a className="TopBarNav-link" href={`${octobluUrl}/discover`}>Discover Bluprints</a>
    </TopBarNav>
  </TopBar>
}

export default BluprintsNavBar
