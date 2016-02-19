import React, { Component, PropTypes } from 'react'
import './index.css'

import { FaCog } from 'react-icons/lib/fa'

export default class BluAppBar extends Component {
  state = {
    showSettings: false
  }

  constructor(props) {
    super(props)
  }

  toggleSettings = () => {
    this.setState({ showSettings: !this.state.showSettings })
  }

  render() {
    let settings = null
    if (this.state.showSettings ) {
      settings = <span aria-hidden="true">
        <a className="BluAppBar-link" href="//app.octoblu.com/profile">Profile</a>
        <a className="BluAppBar-link" href="//app.octoblu.com/guides">Guides</a>
        <a className="BluAppBar-link" href="//app.octoblu.com/signout">Sign Out</a>
      </span>
    }

    return <div className="BluAppBar-container">
      <div className="BluAppBar">
        <a className="BluAppBar-link BluAppBar-link--logo" href="/design">
          <img className="BluAppBar-logo" src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"/>
        </a>

        <nav className="BluAppBar-nav BluAppBar-nav--primary">
          <a className="BluAppBar-link BluAppBar-link--is-selected" href="//app.octoblu.com/design">Design</a>
          <a className="BluAppBar-link" href="//app.octoblu.com/things">Things</a>
          <a className="BluAppBar-link" href="//app.octoblu.com/bluprints">Bluprints</a>
        </nav>

        <nav className="BluAppBar-nav BluAppBar-nav--secondary">
          {settings}

          <button onClick={this.toggleSettings} aria-label="Open settings menu" className="BluAppBar-link">
            <FaCog className="BluAppBar-link-icon"/>
          </button>
        </nav>
      </div>
    </div>
  }
}
