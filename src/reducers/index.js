import {combineReducers} from 'redux'
import { routerStateReducer as router } from 'redux-router'

import bluprints from './bluprints-reducer'
import collections from './collection-reducer'
import context from './context-reducer'

const rootReducer = combineReducers({
  bluprints,
  collections,
  context,
  router
})

export default rootReducer
