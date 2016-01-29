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
    <div className="BluprintMeta-info">
      <div className="BluprintMeta-author">
        Created By: <strong>{author}</strong>
      </div>
      <div className="BluprintMeta-installs">
        Installs: <strong>{installs}</strong>
      </div>
    </div>

    <ShareButtons importUrl={octobluUrl}/>
  </div>
}

BluprintMeta.propTypes = {
  bluprint: PropTypes.object.isRequired
}

export default BluprintMeta
