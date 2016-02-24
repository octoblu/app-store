import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

import EmailShareButton from './email-share-button'
import FacebookShareButton from './facebook-share-button'
import TwitterShareButton from './twitter-share-button'

const Share = ({ className, label }) => {
  const componentClass = classNames('Share', className)

  return <div className={componentClass}>
    <div className="Share-buttons">
      <TwitterShareButton message={`Check out ${label} on @octoblu`} />
      <FacebookShareButton message={`Check out ${label} on @octoblu`} />
      <EmailShareButton subject={`Check out ${label} on Octoblu ${window.location.href}`} />
    </div>
  </div>
}

Share.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string
}

export default Share
