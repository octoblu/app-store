import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

const CollectionNav = ({ items }) => {
  let collectionNavItems = items.map(collection => <div key={collection.id}><Link to={`/collection/${collection.id}`}>{collection.label}</Link></div>)
  return <nav className="CollectionNav">{collectionNavItems}</nav>
}

CollectionNav.propTypes = {
  items: PropTypes.array.isRequired
}

export default CollectionNav
