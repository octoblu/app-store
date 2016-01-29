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
      return _.assign({}, state, {
        items: _.filter(state.items, (bluprint) => {
          return _.includes(bluprint.collectionIds, action.collectionId)
        })
      })

    default:
      return state
  }
}
