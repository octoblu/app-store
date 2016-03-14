import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { FacebookButton } from 'react-social'

import './index.css'
import ChannelImage from '../channel-image'

const FacebookShareButton = ({ className, message }) => {
  const componentClass = classNames(
    'Button',
    'Button--primary',
    'Button--regular',
    'Share-button',
    'Share-button--facebook',
    className
  )

  return (
    <FacebookButton
      message={message}
      className={componentClass}
    >
      <ChannelImage name="facebook" className="Share-buttonImage" />
      Facebook
    </FacebookButton>
  )
}

FacebookShareButton.PropTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
}
export default FacebookShareButton
