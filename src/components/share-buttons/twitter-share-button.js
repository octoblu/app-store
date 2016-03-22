import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { TwitterButton } from 'react-social'

import './index.css'
import ThingImage from '../thing-image'

const TwitterShareButton = ({ className, message }) => {
  const componentClass = classNames(
    'Button',
    'Button--primary',
    'Button--regular',
    'Share-button',
    'Share-button--twitter',
    className
  )

  return (
    <TwitterButton
      message={message}
      className={componentClass}
      url={window.location.href}
    >
      <ThingImage type="channel:twitter" className="Share-buttonImage" /> Twitter
    </TwitterButton>
  )
}

TwitterShareButton.PropTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
}

export default TwitterShareButton
