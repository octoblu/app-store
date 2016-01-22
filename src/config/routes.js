import React from 'react'
import { IndexRedirect, IndexRoute, Route, Router } from 'react-router'

import { createHistory } from 'history'

import Collection from '../containers/Collection'
import Detail from '../containers/detail'
import Index from '../containers/index'
import Layout from '../containers/layout'

const Routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Layout}>
      <IndexRoute component="Index" />
      <Route path="/collection/:collectionName" component={Collection} />
      <Route path="/:bluprintId" component={Detail} />
    </Route>
  </Router>
)

export default Routes
