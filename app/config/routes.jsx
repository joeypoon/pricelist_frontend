import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import makeStore from '../store';

import App from '../components/App';
import Home from '../components/Home';
import Login from '../components/Login';

export const routes = (
  <Provider store={makeStore()}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='login' component={Login} />
      </Route>
    </Router>
  </Provider>
);