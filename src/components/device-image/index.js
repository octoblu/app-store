import classNames from 'classnames'
import React, { PropTypes } from 'react'

import './index.css'

const parseType = (type) => {
  if (!type) return null

  const [category, name] = type.split(':')
  return {category, name}
}

const DeviceImage = ({type, className}) => {
  const componentClass = classNames('DeviceImage', className)
  const {category, name} = parseType(type)
  const url = `https://icons.octoblu.com/${category}/${name}.svg`

  return <img src={url} className={componentClass} alt={name}/>
}

DeviceImage.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default DeviceImage
