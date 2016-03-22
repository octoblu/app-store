import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

const ChannelImage = ({name, className}) => {
  const url = `https://icons.octoblu.com/channel/${name}.svg`

  return <img src={url} className={className} alt={name}/>
}

ChannelImage.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default ChannelImage
