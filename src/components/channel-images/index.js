import classNames from 'classnames'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

import ChannelImage from '../channel-image'

const ChannelImages = ({ bluprint, collectionId, className }) => {
  const classes = classNames('ChannelImages', className)
  const channelImages = _.map(bluprint.tags, (tag, index) =>
    <Link to={`/collections/${collectionId}?tag=${tag}`} key={index}>
      <ChannelImage key={index} name={tag} className="ChannelImages-image" />
    </Link>
  )

  return <aside className={classes}>{channelImages}</aside>
}

ChannelImages.propTypes = {
  bluprint: PropTypes.object.isRequired,
  collectionId: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default ChannelImages
