import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/header';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <Redirect to="/shop" />
      ) : (
        <div>
          <Header />
          <Component {...props} />
        </div>
      )
    }
  />
);

export default PublicRoute;
