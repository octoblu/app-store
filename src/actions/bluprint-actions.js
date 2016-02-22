import * as types from '../constants/action-types'

export function fetchBluprints() {
  return {
    type: types.FETCH_BLUPRINTS
  }
}

export function fetchBluprintsByTagName(tag) {
  return {
    type: types.FETCH_BLUPRINTS_BY_TAG_NAME,
    tag
  }
}

export function fetchBluprintsByCollectionId(collectionId, tag) {
  return {
    type: types.FETCH_BLUPRINTS_BY_COLLECTION,
    collectionId,
    tag
  }
}
