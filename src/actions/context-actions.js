import * as types from '../constants/action-types'

export function setContext(context) {
  return {
    type: types.SET_CONTEXT,
    context
  }
}
