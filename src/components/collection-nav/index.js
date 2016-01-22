import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

const CollectionNav = ({ items }) => {
  let collectionNavItems = items.map(collection => <Link to={`/collection/${collection.id}`} key={collection.id}>{collection.label}</Link>)
  return <nav className="CollectionNav">{collectionNavItems}</nav>
}

CollectionNav.propTypes = {
  items: PropTypes.array.isRequired
}

export default CollectionNav
