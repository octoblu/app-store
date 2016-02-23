import React, { Component, PropTypes } from 'react'
import { FaCog } from 'react-icons/lib/fa'

import './index.css'

export default class AppBar extends Component {
  state = {
    showSettings: false
  }

  static propTypes = {
    octobluUrl: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }

  toggleSettings = () => {
    this.setState({ showSettings: !this.state.showSettings })
  }

  render() {
    const OCTOBLU_URL = this.props.octobluUrl

    let settings = null
    if (this.state.showSettings ) {
      settings = <span aria-hidden="true">
        <a className="AppBar-link" href={`${OCTOBLU_URL}/profile`}>Profile</a>
        <a className="AppBar-link" href={`${OCTOBLU_URL}/guides`}>Guides</a>
        <a className="AppBar-link" href={`${OCTOBLU_URL}/signout`}>Sign Out</a>
      </span>
    }

    return <div className="AppBar-container">
      <div className="AppBar">
        <a className="AppBar-link AppBar-link--logo" href={`${OCTOBLU_URL}`}>
          <img className="AppBar-logo" src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"/>
        </a>

        <nav className="AppBar-nav AppBar-nav--primary">
          <a className="AppBar-link" href={`${OCTOBLU_URL}/things`}>Things</a>
          <a className="AppBar-link AppBar-link--is-selected" href={`${OCTOBLU_URL}/design`}>Design</a>
          <a className="AppBar-link" href={`${OCTOBLU_URL}/bluprints`}>Bluprints</a>
        </nav>

        <nav className="AppBar-nav AppBar-nav--secondary">
          {settings}

          <button onClick={this.toggleSettings} aria-label="Open settings menu" className="AppBar-link">
            <FaCog className="AppBar-link-icon"/>
          </button>
        </nav>
      </div>
    </div>
  }
}
