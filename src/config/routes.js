import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import { createHistory } from 'history'

import Bluprint from '../containers/bluprint'
import Collection from '../containers/collection'
import Collections from '../containers/collections'
import Layout from '../containers/layout'
import CWCLayout from '../containers/cwc-layout'

const Routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Collections} />
      <Route path="/collections/:collectionId" component={Collection} />
      <Route path="/collections/:collectionId/bluprints/:bluprintId" component={Bluprint} />
    </Route>

    <Route path="/cwc" component={CWCLayout}>
      <IndexRoute component={Collections} />
      <Route path="/collections/:collectionId" component={Collection} />
      <Route path="/collections/:collectionId/bluprints/:bluprintId" component={Bluprint} />
    </Route>
  </Router>
)

export default Routes
