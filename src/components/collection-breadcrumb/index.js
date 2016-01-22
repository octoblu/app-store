import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

const CollectionBreadcrumb = ({collectionName}) => {
  return <div className="CollectionBreadcrumb">
    <Link to="/">Collections</Link> / <span>{collectionName}</span>
  </div>
}

CollectionBreadcrumb.propTypes = {
  collectionName: PropTypes.node.isRequired
}

export default CollectionBreadcrumb
