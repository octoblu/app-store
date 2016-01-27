import React, { PropTypes } from 'react'

import './index.css'
import Button from '../button'

import classNames from 'classnames';

const Share = ({children, className}) => {
  const componentClass = classNames('Share', className);

  return <div className={componentClass}>
    <Button
      href="https://twitter.com/intent/tweet?source=webclient&text=Octoblu"
      kind="neutral"
      size="large"
    >
      Twitter
    </Button>

    <Button
      href="https://www.facebook.com/sharer/sharer.php?u=http://octoblu.com"
      kind="neutral"
      size="large"
    >
      Facebook
    </Button>

    <Button
      href="mailto:?subject=Octoblu is so cool"
      kind="neutral"
      size="large"
    >
      Email
    </Button>
  </div>
}

Share.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Share
