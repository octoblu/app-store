import classNames from 'classnames'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

import ThingImage from '../thing-image'

const BluprintCardTags = ({ bluprint, collectionId, className }) => {
  const classes = classNames('BluprintCardTags', className)

  const tags = _.map(bluprint.types, (type, index) =>
    <Link to={`/collections/${collectionId}?tag=${type.split(':')[1]}`} key={index}>
      <ThingImage type={type} className="BluprintCardTags-image" />
    </Link>
  )

  return <aside className={classes}>{tags}</aside>
}

BluprintCardTags.propTypes = {
  bluprint: PropTypes.object.isRequired,
  collectionId: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default BluprintCardTags
