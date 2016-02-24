import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './index.css'
import Button from '../button'
import ChannelImage from '../channel-image'

const FacebookButton = ({ className, url }) => {
  const componentClass = classNames(
    'Share-button',
    'Share-button--facebook',
    className
  )

  const FACEBOOK_SHARE_URL = 'https://www.facebook.com/sharer/sharer.php?u='

  return <Button
    href={`${FACEBOOK_SHARE_URL}${url}`}
    title="Share App on Facebook"
    className={componentClass}
    target="blank">
    <ChannelImage name="facebook" className="Share-buttonImage" />
    Facebook
  </Button>
}

FacebookButton.PropTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
}
export default FacebookButton
