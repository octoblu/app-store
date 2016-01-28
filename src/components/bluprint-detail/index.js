import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import ChannelImage from '../channel-image'
import Button from '../button'
import ShareButtons from '../share'

import './index.css'

const BluprintDetail = ({ bluprint }) => {
  const channelImage = _.map(bluprint.tags, (tag, index) => <ChannelImage key={index} name={tag} className="BluprintDetail-icon" />)
  const octobluUrl = `https://app.octoblu.com/bluprints/import/${bluprint.id}`

  return <div className="BluprintDetail">
    {channelImage}
    <h1 className="font-bold BluprintDetail-label">{bluprint.label}</h1>
    <p className="BluprintDetail-description">{bluprint.description}</p>

    <div className="BluprintMeta">
      <div className="BluprintInfo">
        <div className="BluprintMeta-author">
          Created By: <strong>Octoblu</strong>
        </div>
        <div className="BluprintMeta-installs">
          Installs: <strong>2.5k</strong>
        </div>
      </div>
      <ShareButtons importUrl={octobluUrl}/>
    </div>

    <Button href={octobluUrl} kind="jumbo">Automate</Button>

  </div>
}

BluprintDetail.propTypes = {
  bluprint: PropTypes.object.isRequired
}

export default BluprintDetail
