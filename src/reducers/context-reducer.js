import _ from 'lodash'
import * as types from '../constants/action-types'

var initialState = null

export default function(state = initialState, action) {
  switch(action.type) {
    case types.SET_CONTEXT:
      return action.context

    default:
      return state
  }
}
