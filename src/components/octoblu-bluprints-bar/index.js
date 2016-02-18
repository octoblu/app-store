import React, { PropTypes } from 'react'
import './index.css'

const BluprintsBar = ( ) => {
  return <header className="TabBar">
    <div className="TabBar-section TabBar-section--tabs">
      <a className="TabBar-tabLink" href="/bluprints">My Bluprints</a>
      <a className="TabBar-tabLink" href="/discover">Discover Bluprints</a>
      <a className="TabBar-tabLink TabBar-tabLink--active" href="/discover">Citrix App Store</a>
    </div>
  </header>
}

export default BluprintsBar
