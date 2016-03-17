import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import MdPerson from 'react-icons/lib/md/person'

import './index.css'

import ChannelImages from '../channel-images'

const BluprintCard = ({ bluprint, collectionId }) => {
  return <div className="BluprintCard">
    <ChannelImages
      bluprint={bluprint}
      collectionId={collectionId}
      className="BluprintCard-channelImages"
    />

    <main className="BluprintCard-main">
      <div className="BluprintCard-body">
        <h4 className="BluprintCard-label">{bluprint.label}</h4>
        <p className="BluprintCard-description">{bluprint.intro}</p>

        <Link
          to={`/collections/${collectionId}/bluprints/${bluprint.id}`}
          key={bluprint.id}
        >
          Learn More
        </Link>

      </div>

      <footer className="BluprintCard-footer">
        <span>
          <MdPerson className="BluprintCard-mdPerson" />
          {bluprint.author}
        </span>
        <a href={bluprint.octobluImportUrl} title="Import App">Automate</a>
      </footer>

    </main>
  </div>
}

BluprintCard.propTypes = {
  bluprint: PropTypes.object.isRequired,
  collectionId: PropTypes.string.isRequired
}

export default BluprintCard
