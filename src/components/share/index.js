import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

import EmailShareButton from './email-share-button'
import FacebookShareButton from './facebook-share-button'
import TwitterShareButton from './twitter-share-button'

const Share = ({ className }) => {
  const componentClass = classNames('Share', className)

  return <div className={componentClass}>
    <div className="Share-buttons">
      <TwitterShareButton text={`Check out this awesome bluprint on @Octoblu ${window.location.href}`} />
      <FacebookShareButton url={window.location.href} />
      <EmailShareButton subject={`Octoblu is so cool" body="Check out this awesome bluprint from Octoblu ${window.location.href}`} />
    </div>
  </div>
}

Share.propTypes = {
  className: PropTypes.string
}

export default Share
