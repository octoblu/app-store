import React, { Component, PropTypes } from 'react'
import './index.css'

import { FaCog } from 'react-icons/lib/fa'

export default class BluAppBar extends Component {
  state = {
    showSettings: false
  }

  static propTypes = {
    octobluUrl: PropTypes.string.isRequired,
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
    if (this.state.showSettings) {
      settings = <span aria-hidden="true">
        <a className="BluAppBar-link" href={`${OCTOBLU_URL}/profile`}>Profile</a>
        <a className="BluAppBar-link" href={`${OCTOBLU_URL}/guides`}>Guides</a>
        <a className="BluAppBar-link" href={`${OCTOBLU_URL}/signout`}>Sign Out</a>
      </span>
    }

    return <div className="BluAppBar-container">
      <div className="BluAppBar">
        <a className="BluAppBar-link BluAppBar-link--logo" href="/design">
          <img className="BluAppBar-logo" src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"/>
        </a>

        <nav className="BluAppBar-nav BluAppBar-nav--primary">
          <a className="BluAppBar-link BluAppBar-link--is-selected" href={`${OCTOBLU_URL}/design`}>Design</a>
          <a className="BluAppBar-link" href={`${OCTOBLU_URL}/things`}>Things</a>
          <a className="BluAppBar-link" href={`${OCTOBLU_URL}/bluprints`}>Bluprints</a>
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
