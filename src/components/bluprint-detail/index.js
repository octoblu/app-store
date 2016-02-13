import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import ChannelImage from '../channel-image'
import Button from '../button'
import BluprintMeta from '../bluprint-meta'
import ShareButtons from '../share'

import './index.css'

const BluprintDetail = ({ bluprint }) => {
  const channelImage = _.map(bluprint.tags, (tag, index) => <ChannelImage key={index} name={tag} className="BluprintDetail-icon" />)

  let button = <Button href={bluprint.octobluImportUrl} kind="jumbo">Automate</Button>
  if (!bluprint.active){
    button = <Button disabled kind="jumbo" className="BluprintDetail-automateBtn--disabled">Coming Soon!</Button>
  }

  let blogPost = null
  if (bluprint.blogPost){
    blogPost = <a className="BluprintDetail-blogLink" href={bluprint.blogPost}>Blog Post</a>
  }

  return <div className="BluprintDetail">
    {channelImage}
    <h1 className="font-bold BluprintDetail-label">{bluprint.label}</h1>
    <p className="BluprintDetail-description">{bluprint.description}</p>
    { blogPost }

    {button}
    <BluprintMeta bluprint={bluprint}/>
  </div>
}

BluprintDetail.propTypes = {
  bluprint: PropTypes.object.isRequired
}

export default BluprintDetail
