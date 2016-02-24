import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './index.css'
import Button from '../button'
import ChannelImage from '../channel-image'

const TwitterButton = ({ className, text }) => {
  const componentClass = classNames(
    'Share-button',
    'Share-button--twitter',
    className
  )

  const TWITTER_SHARE_URL = 'https://twitter.com/intent/tweet?source=webclient&text='

  return <Button
    href={`${TWITTER_SHARE_URL}${encodeURIComponent(text)}`}
    title="Share App on Twitter"
    className={componentClass}
    target="blank">
    <ChannelImage name="twitter" className="Share-buttonImage" />
    Twitter
  </Button>
}

TwitterButton.PropTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default TwitterButton
