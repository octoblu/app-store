import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { MdPerson } from 'react-icons/lib/md'

import ChannelImage from '../channel-image'

import './index.css'

const BluprintCard = ({ bluprint, collectionId }) => {
  const channelImages = _.map(bluprint.tags, (tag, index) =>
    <Link to={`/collections/${collectionId}?tag=${tag}`} key={index}>
      <ChannelImage key={index} name={tag} className="BluprintCard-channelImage" />
    </Link>
  )


  let importLink = <span>Coming Soon...</span>

  if(bluprint.active){
    importLink = <a href={bluprint.octobluImportUrl} title="Import App">Automate</a>
  }

  return <div className="BluprintCard">
    <aside className={`BluprintCard-channelImages xBluprintCard-channelImages--${bluprint.tags[0]}`}>{channelImages}</aside>
    <main className="BluprintCard-main">
      <div className="BluprintCard-body">
        <h4 className="BluprintCard-label">{bluprint.label}</h4>
        <p className="BluprintCard-description">{bluprint.intro}</p>
        <Link
          to={`/collections/${collectionId}/bluprints/${bluprint.id}`}
          key={bluprint.id}>
          Learn More
        </Link>
      </div>
      <footer className="BluprintCard-footer">
        <span>
          <MdPerson className="BluprintCard-mdPerson"/>{bluprint.author}
        </span>

        {importLink}
      </footer>
    </main>
  </div>
}

BluprintCard.propTypes = {
  bluprint: PropTypes.object.isRequired,
  collectionId: PropTypes.string.isRequired
}

export default BluprintCard
