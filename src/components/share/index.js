import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

import EmailShareButton from './email-share-button'
import FacebookShareButton from './facebook-share-button'
import TwitterShareButton from './twitter-share-button'

const Share = ({className}) => {
  const componentClass = classNames('Share', className)

  return <div className={componentClass}>
    <p>Share</p>
    <div className="Share-buttons">
      <TwitterShareButton text="Octoblu" />
      <FacebookShareButton url="http://octoblu.com" />
      <EmailShareButton subject="Octoblu is so cool" body="Fancy body" />
    </div>
  </div>
}

Share.propTypes = {
  className: PropTypes.string
}

export default Share
