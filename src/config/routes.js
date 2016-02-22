import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import { createHistory } from 'history'

import Bluprint from '../containers/bluprint'
import Collection from '../containers/collection'
import Collections from '../containers/collections'
import Layout from '../containers/layout'
import Tag from '../containers/tag'

const Routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Collections} />
      <Route path="/tags/:tag" component={Tag} />
      <Route path="/collections/:collectionId" component={Collection} />
      <Route path="/collections/:collectionId/bluprints/:bluprintId" component={Bluprint} />
    </Route>

    <Route path="/cwc" component={Layout}>
      <IndexRoute component={Collections} />
      <Route path="/tags/:tag" component={Tag} />
      <Route path="/collections/:collectionId" component={Collection} />
      <Route path="/collections/:collectionId/bluprints/:bluprintId" component={Bluprint} />
    </Route>
  </Router>
)

export default Routes
