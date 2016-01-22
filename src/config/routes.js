import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import { createHistory } from 'history'

import Bluprints from '../containers/bluprints'
import Detail from '../containers/detail'
import Collections from '../containers/collections'
import Layout from '../containers/layout'

const Routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Collections} />
      <Route path="/collection/:collectionId" component={Bluprints} />
      <Route path="/bluprints/:bluprintId" component={Detail} />
    </Route>
  </Router>
)

export default Routes
