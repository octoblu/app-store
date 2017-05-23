import React, { Component } from "react"
import { Link } from "react-router"
import { connect } from "react-redux"

import "../styles/handglide/fonts.css"
import "../styles/base.css"

import AppBar from "../components/zooids/app-bar"
import Loading from "../components/loading/index"
import { OCTOBLU_URL } from "../constants"

class Layout extends Component {
  state = {
    showApp: false,
  }

  componentDidMount() {
    window.addEventListener("message", (event) => {
      if (event.origin === window.location.origin && event.data) {
        if (event.data.name === "$cwcNavbarUserAuthorized") {
          this.setState({ showApp: true })
        }
        if (event.data.name === '$cwcNavbarUserNotAuthorized') {
          this.setState({ showApp: false })
        }
      }
    })
  }

  render() {
    const { context } = this.props
    const { showApp } = this.state

    let appBar = null
    if (context === "octoblu") appBar = <AppBar octobluUrl={OCTOBLU_URL} />

    let children = <Loading message="Please wait while we authenticate you." />
    if (showApp) children = this.props.children

    return (
      <div>
        {appBar}
        {children}
      </div>
    )
  }
}

function mapStateToProps({ context }) {
  return { context }
}

export default connect(mapStateToProps)(Layout)
