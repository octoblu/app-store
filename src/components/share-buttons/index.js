import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

import EmailShareButton from './email-share-button'
import FacebookShareButton from './facebook-share-button'
import TwitterShareButton from './twitter-share-button'

const ShareButtons = ({ className, label }) => {
  const componentClass = classNames('Share', className)

  return <div className={componentClass}>
    <TwitterShareButton message={`Check out ${label} on @octoblu`} />
    <FacebookShareButton message={`Check out ${label} on @octoblu`} />
    <EmailShareButton subject={label} body={`Check out ${label} on Octoblu ${window.location.href}`} />
  </div>
}

ShareButtons.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
}

export default ShareButtons
