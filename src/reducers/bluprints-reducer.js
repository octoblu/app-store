import _ from 'lodash'
import * as types from '../constants/action-types'

import Bluprint from './bluprint-reducer'

var bluprints = [{
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

var initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_BLUPRINTS:
      return _.assign({}, state, {
        items: bluprints.map(bluprint => Bluprint(undefined, {type: 'add', bluprint}))
      })

    case types.FETCH_BLUPRINT:
      state.items.map(bluprint => Bluprint(bluprint, action))
      return _.assign({}, state, {
        items: state.items.map(bluprint => Bluprint(bluprint, action))
      })

    default:
      return state
  }
}
