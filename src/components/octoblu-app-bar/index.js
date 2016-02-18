import React, { PropTypes } from 'react'
import './index.css'

const OctobluAppBar = ( ) => {
  return <div className="BluAppBar">
    <a className="BluAppBar-link BluAppBar-link--logo" href="/design">
      <img className="BluAppBar-logo" src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"/>
    </a>

    <nav className="BluAppBar-nav BluAppBar-nav--primary">
      <a className="BluAppBar-link BluAppBar-link--is-selected" href="/design">Design</a>
      <a className="BluAppBar-link" href="/things">Things</a>
      <a className="BluAppBar-link" href="/bluprints">Bluprints</a>
    </nav>

    <nav className="BluAppBar-nav BluAppBar-nav--secondary">
      <span aria-hidden="true">
        <a className="BluAppBar-link" href="/profile">Profile</a>
        <a className="BluAppBar-link" href="/guides">Guides</a>
        <a className="BluAppBar-link" href="/signout">Sign Out</a>
      </span>

      <button aria-label="Open settings menu" className="BluAppBar-link">
        <i className="fa fa-cog fa-lg"></i>
      </button>
    </nav>
  </div>
}

OctobluAppBar.propTypes = {
  active: PropTypes.node
}

export default OctobluAppBar
