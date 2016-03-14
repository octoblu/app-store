import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { TwitterButton } from 'react-social'

import './index.css'
import ChannelImage from '../channel-image'

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
      <ChannelImage name="twitter" className="Share-buttonImage" /> Twitter
    </TwitterButton>
  )
}

TwitterShareButton.PropTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
}

export default TwitterShareButton
