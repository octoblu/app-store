import classNames from 'classnames'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

import DeviceImage from '../device-image'

const ChannelImages = ({ bluprint, collectionId, className }) => {
  const classes = classNames('ChannelImages', className)
  const channelImages = _.map(bluprint.types, (type, index) =>
    <Link to={`/collections/${collectionId}?tag=${type.split(':')[1]}`} key={index}>
      <DeviceImage type={type} className="ChannelImages-image" />
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
