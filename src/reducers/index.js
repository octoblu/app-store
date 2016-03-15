import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import bluprints from './bluprints-reducer'
import collections from './collection-reducer'
import context from './context-reducer'

const rootReducer = combineReducers({
  bluprints,
  collections,
  context,
  routing: routerReducer
})

export default rootReducer
