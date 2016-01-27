import * as types from '../constants/action-types'

export function fetchBluprints() {
  return {
    type: types.FETCH_BLUPRINTS
  }
}


export function fetchBluprintsByCollectionId(collectionId) {
  return {
    type: types.FETCH_BLUPRINTS_BY_COLLECTION,
    collectionId
  }
}
