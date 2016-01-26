import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

const CollectionCard = ({ collection }) => {
  return <Link to={`/collection/${collection.id}`} className="CollectionCard" key={collection.id}>
    <img src="" alt={collection.label} className="CollectionCard-logo"/>
    <p className="font-bold CollectionCard-label">{collection.label}</p>
    <p className="CollectionCard-description">{collection.description}</p>
  </Link>
}

CollectionCard.propTypes = {
  collection: PropTypes.object.isRequired
}

export default CollectionCard
