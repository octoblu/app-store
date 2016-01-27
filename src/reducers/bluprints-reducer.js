import _ from 'lodash'
import * as types from '../constants/action-types'


var bluprints = [{
  label: "Bluprint 1",
  id: "bluprint-1",
  octobluUrl: "adkfaslkdjflasdjfjas",
  tags: ['sharefile'],
  collectionIds:['meetings', 'security'],
  intro: "Enhance your Sharefile account with document approval automation",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
},
{
  label: "Bluprint 2",
  id: "bluprint-2",
  octobluUrl: "adkfaslkdjflasdjfjas",
  tags: ['podio'],
  collectionIds:['monitoring-alerts', 'workspace'],
  intro: "Cats are the best. Meow! This flow does stuff with Podio.",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}]

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
