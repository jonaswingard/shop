import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import PublicRoute from './public-route';
import StartPage from '../components/start-page';
import ShoppingListPage from '../components/shopping-list-page';
import ProductPage from '../components/product-page';
import SectionPage from '../components/section-page';
import NotFoundPage from '../components/not-found-page';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div className="container">
      <Switch>
        <PublicRoute path="/" component={StartPage} exact={true} />
        <PublicRoute path="/shop" component={ShoppingListPage} />
        <PublicRoute path="/products" component={ProductPage} />
        <PublicRoute path="/sections" component={SectionPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
