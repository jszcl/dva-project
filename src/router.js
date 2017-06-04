import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

import Login from "./routes/Login.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/products" component={Products} />
      <Route path="/login" component={Login} />
    </Router>
  );
}

export default RouterConfig;
