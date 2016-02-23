import _ from 'lodash'
import * as types from '../constants/action-types'
import bluprints from './demo-bluprints'

var initialState = {
  items: bluprints
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_BLUPRINTS:
      return _.assign({}, state, {
        items: bluprints
      })

    case types.FETCH_BLUPRINTS_BY_COLLECTION:
      let collectionBluprints = _.filter(bluprints, (bluprint) => {
        return _.includes(bluprint.collectionIds, action.collectionId)
      })
      if(action.tag){
        collectionBluprints = _.filter(collectionBluprints, (bluprint) => {
          return _.includes(bluprint.tags, action.tag)
        })
      }
      return _.assign({}, state, { items: collectionBluprints })

    case types.FETCH_BLUPRINTS_BY_TAG_NAME:
      return _.assign({}, state, {
        items: _.filter(bluprints, (bluprint) => {
          return _.includes(bluprint.tags, action.tag)
        })
      })

    default:
      return state
  }
}
