import React, { PropTypes } from 'react'
import PageBar from '../page-bar'
import PageBarNav from '../page-bar-nav'

const BluprintsBar = ( ) => {
  return <PageBar>
    <PageBarNav>
      <a className="PageBar-navLink" href="//app.octoblu.com/bluprints">My Bluprints</a>
      <a className="PageBar-navLink" href="//app.octoblu.com/discover">Discover Bluprints</a>
      <a className="PageBar-navLink PageBar-navLink--active" href="//store.octoblu.com">Citrix App Store</a>
    </PageBarNav>
  </PageBar>
}

export default BluprintsBar
