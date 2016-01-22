import * as types from '../constants/action-types'

export function fetchBluprints() {
  return {
    type: types.FETCH_BLUPRINTS
  }
}

export function fetchBluprint(bluprintId) {
  return {
    type: types.FETCH_BLUPRINT,
    bluprintId
  }
}
