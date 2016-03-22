import React, { PropTypes } from 'react'
import classNames from 'classnames'
import { FacebookButton } from 'react-social'

import './index.css'
import ThingImage from '../thing-image'

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
      <ThingImage type="channel:facebook" className="Share-buttonImage" />
      Facebook
    </FacebookButton>
  )
}

FacebookShareButton.PropTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
}
export default FacebookShareButton
