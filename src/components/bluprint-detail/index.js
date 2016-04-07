import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import ThingImage from '../thing-image'
import Button from '../button'

import './index.css'

const BluprintDetail = ({ bluprint }) => {
  const thingImages = _.map(bluprint.types, (type, index) => {
    return <ThingImage type={type} className="BluprintDetail-icon" key={index}/>
  })

  let blogPostLink = null
  if (bluprint.blogPost){
    blogPostLink = <a className="BluprintDetail-blogLink" href={bluprint.blogPost}>Blog Post</a>
  }

  return <div className="BluprintDetail">
    {thingImages}

    <h1 className="font-bold BluprintDetail-label">{bluprint.label}</h1>
    <p className="BluprintDetail-description">{bluprint.description}</p>

    { blogPostLink }

    <Button href={bluprint.octobluImportUrl} kind="jumbo">Automate</Button>
  </div>
}

BluprintDetail.propTypes = {
  bluprint: PropTypes.object.isRequired
}

export default BluprintDetail
