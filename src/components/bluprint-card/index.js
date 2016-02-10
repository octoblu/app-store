import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import ChannelImage from '../channel-image'

import './index.css'

const BluprintCard = ({ bluprint, collectionId }) => {
  const channelImages = _.map(bluprint.tags, (tag, index) => <ChannelImage key={index} name={tag} className="BluprintCard-channelImage" />)

  // return <div className={`BluprintCard BluprintCard--${bluprint.tags[0]}`}>
  //   <header className="BluprintCard-header">
  //     {channelImages}
  //   </header>
  //
  //   <footer className="BluprintCard-footer">
  //     <p className="font-bold BluprintCard-label">{bluprint.label}</p>
  //     <p className="BluprintCard-description">{bluprint.intro}</p>
  //     <Link
  //       to={`/collections/${collectionId}/bluprints/${bluprint.id}`}
  //       className="Button Button--neutral BluprintCard-button"
  //       key={bluprint.id}
  //     >
  //       Learn More
  //     </Link>
  //   </footer>
  // </div>

  return <div className={`BluprintCard BluprintCards--${bluprint.tags[0]}`}>
    <h4 className="BluprintCard-label">{bluprint.label}</h4>

    <p className="BluprintCard-description">{bluprint.intro}</p>

    <Link
      to={`/collections/${collectionId}/bluprints/${bluprint.id}`}
      key={bluprint.id}
    >
      Learn More
    </Link>

  </div>
}

BluprintCard.propTypes = {
  bluprint: PropTypes.object.isRequired,
  collectionId: PropTypes.string.isRequired
}

export default BluprintCard
