import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import ChannelImage from '../channel-image'

import './index.css'

const BluprintCard = ({ bluprint }) => {
  const tags = _.map(bluprint.tags, (tag) => <ChannelImage name={tag} />)

  return <Link to={`/bluprints/${bluprint.id}`} className="BluprintCard" key={bluprint.id}>
    {tags}
    <p className="font-bold BluprintCard-label">{bluprint.label}</p>
    <p className="BluprintCard-description">{bluprint.description}</p>
  </Link>
}

BluprintCard.propTypes = {
  bluprint: PropTypes.object.isRequired
}

export default BluprintCard
