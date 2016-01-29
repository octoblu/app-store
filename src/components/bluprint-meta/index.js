import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import ChannelImage from '../channel-image'
import Button from '../button'
import ShareButtons from '../share'

import './index.css'

const BluprintMeta = ({ bluprint }) => {
  let {author, id, installs} = bluprint
  const octobluUrl = `https://app.octoblu.com/bluprints/import/${id}`

  return <div className="BluprintMeta">
    

    <ShareButtons importUrl={octobluUrl}/>
  </div>
}

BluprintMeta.propTypes = {
  bluprint: PropTypes.object.isRequired
}

export default BluprintMeta
