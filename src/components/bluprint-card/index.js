import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

const BluprintCard = ({ bluprint }) => {
  return <Link to={`/bluprints/${bluprint.id}`} className="BluprintCard" key={bluprint.id}>
    <p className="font-bold BluprintCard-label">{bluprint.label}</p>
    <p className="BluprintCard-description">{bluprint.description}</p>
  </Link>
}

BluprintCard.propTypes = {
  bluprint: PropTypes.object.isRequired
}

export default BluprintCard
