import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

import EmailShareButton from './email-share-button'
import FacebookShareButton from './facebook-share-button'
import TwitterShareButton from './twitter-share-button'

const Share = ({ className, importUrl }) => {
  const componentClass = classNames('Share', className)

  return <div className={componentClass}>
    <p>Share</p>
    <div className="Share-buttons">
      <TwitterShareButton text={`Check out this awesome bluprint on @Octoblu ${importUrl}`} />
      <FacebookShareButton url={importUrl} />
      <EmailShareButton subject={`Octoblu is so cool" body="Check out this awesome bluprint from Octoblu ${importUrl}`} />
    </div>
  </div>
}

Share.propTypes = {
  className: PropTypes.string,
  importUrl: PropTypes.string.isRequired
}

export default Share
