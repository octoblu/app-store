import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import { createHistory } from 'history'

import Collection from '../containers/Collection'
import Detail from '../containers/detail'
import Home from '../containers/home'
import Layout from '../containers/layout'

const Routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="/collection/:collectionId" component={Collection} />
      <Route path="/:bluprintId" component={Detail} />
    </Route>
  </Router>
)

export default Routes
