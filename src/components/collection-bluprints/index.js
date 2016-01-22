import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import './index.css'

const CollectionBluprints = ({bluprints}) => {
  const bluprintItems = bluprints.map(bluprint => <Link to={`/bluprints/${bluprint.id}`}>{bluprint.label}</Link>)

  return <div className="CollectionBluprints">
    <h2>Bluprintssss</h2>
    {bluprintItems}
  </div>
}

CollectionBluprints.propTypes = {
  bluprints: PropTypes.array.isRequired
}

export default CollectionBluprints
