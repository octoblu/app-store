import {combineReducers} from 'redux'
import { routerStateReducer as router } from 'redux-router'

import bluprint from './bluprint-reducer'
import bluprints from './bluprints-reducer'
import collections from './collection-reducer'

const rootReducer = combineReducers({
  bluprint,
  bluprints,
  collections,
  router
})

export default rootReducer
