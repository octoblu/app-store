import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from './reducers/'
import AppRoutes from './config/routes'

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, createLogger())

const store = createStore(reducers, createStoreWithMiddleware)

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <AppRoutes history={history} />
  </Provider>,
  document.getElementById('app')
)
