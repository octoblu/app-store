import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import { createHistory } from 'history'

import Bluprint from '../containers/bluprint'
import Collection from '../containers/collection'
import Collections from '../containers/collections'
import Layout from '../containers/layout'

const Routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Collections} />
      <Route path="/collection/:collectionId" component={Collection} />
      <Route path="/bluprints/:bluprintId" component={Bluprint} />
    </Route>
  </Router>
)

export default Routes
