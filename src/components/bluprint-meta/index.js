import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import Button from '../button'
import ShareButtons from '../share'

import './index.css'

const BluprintMeta = ({ bluprint }) => {
  return <div className="BluprintMeta">
    <ShareButtons label={bluprint.label}/>
  </div>
}

BluprintMeta.propTypes = {
  bluprint: PropTypes.object.isRequired
}

export default BluprintMeta
