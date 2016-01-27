import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import ChannelImage from '../channel-image'
import Button from '../button'
import ShareButtons from '../share'

import './index.css'

const BluprintDetail = ({ bluprint }) => {
  const channelImage = _.map(bluprint.tags, (tag) => <ChannelImage name={tag} className="BluprintDetail-icon" />)

  return <div className="BluprintDetail">
    {channelImage}
    <h1 className="font-bold BluprintDetail-label">{bluprint.label}</h1>
    <p className="BluprintDetail-description">{bluprint.description}</p>
    <Button href={bluprint.octobluUrl} kind="jumbo">Automate</Button>

    <ShareButtons />
  </div>
}

BluprintDetail.propTypes = {
  bluprint: PropTypes.object.isRequired
}

export default BluprintDetail
