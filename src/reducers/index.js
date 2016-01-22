import {combineReducers} from 'redux'
import { routerStateReducer as router } from 'redux-router'

import collections from './collection-reducer'

const rootReducer = combineReducers({
  collections,
  router
})

export default rootReducer
