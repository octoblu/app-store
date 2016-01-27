import React, { PropTypes } from 'react'
import classNames from 'classnames'

import './index.css'

import Button from '../button'
import ChannelImage from '../channel-image'

const EmailButton = ({ className, subject, body }) => {
  const componentClass = classNames(
    'Share-button',
    'Share-button--email',
    className
  )

  return <Button
    href={`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
    title="Share App via Email"
    className={componentClass}>
    <ChannelImage name="email" className="Share-buttonImage" />
    Email
  </Button>
}

EmailButton.PropTypes = {
  className: PropTypes.string,
  subject: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}
export default EmailButton
