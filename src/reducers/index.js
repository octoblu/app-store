import {combineReducers} from 'redux'
import { routerStateReducer as router } from 'redux-router'

import bluprints from './bluprints-reducer'
import collections from './collection-reducer'

const rootReducer = combineReducers({
  bluprints,  
  collections,
  router
})

export default rootReducer
