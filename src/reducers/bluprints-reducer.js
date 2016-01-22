import _ from 'lodash'
import * as types from '../constants/action-types'

var initialState = {
  items: [{
    label: "Bluprint 1",
    id: "bluprint-1",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['podio', 'sharefile'],
    collectionIds:['meetings', 'process-automation']
  },
  {
    label: "Bluprint 2",
    id: "bluprint-2",
    octobluUrl: "adkfaslkdjflasdjfjas",
    tags: ['podio', 'sharefile'],
    collectionIds:['alerts', 'process-automation']
  }]
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_BLUPRINTS:
      return state

    default:
      return state
  }
}
