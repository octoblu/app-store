import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import AppBar from '../app-bar'

import './index.css'

const Breadcrumb = ({fragments}) => {
  const fragmentNodes = fragments.map(fragment => {
    let {label, linkTo} = fragment

    if (linkTo) return <Link to={linkTo} className="Breadcrumb-fragment" key={label}>{label}</Link>
    return <span className="Breadcrumb-fragment Breadcrumb-fragment--active" key={label}>{label}</span>
  });

  return <AppBar>
    <div className="Collections-title">{fragmentNodes}</div>
    <a href="http://app.octoblu.com" className="Collections-link">Visit Octoblu</a>
  </AppBar>
}

Breadcrumb.propTypes = {
  fragments: PropTypes.arrayOf(PropTypes.shape({
    label: React.PropTypes.string.isRequired,
    linkTo: React.PropTypes.string
  })),
}

export default Breadcrumb
