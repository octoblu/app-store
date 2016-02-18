import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './index.css'

const PageBarNav = ({children, className}) => {
  const componentClass = classNames(
    'PageBar-section',
    'PageBar-section--nav',
    className
  )

  return <nav className={componentClass}>
    {children}
  </nav>
}

PageBarNav.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default PageBarNav
