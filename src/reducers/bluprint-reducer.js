import _ from 'lodash'
import * as types from '../constants/action-types'

let initialState = {
  label: null,
  id: null,
  octobluUrl: null,
  tags: [],
  collectionIds: [],
  loder: 'bang'
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'add':
      console.log('add', action);
      if (!action.bluprint) return null
      return _.assign({}, initialState, action.bluprint)

    case types.FETCH_BLUPRINT:
      console.log('FETCH_BLUPRINT', action);
      return selectedBluprint

    default:
      return state
  }
}
