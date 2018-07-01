import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNavigation = () => (
  <nav>
    <NavLink to="/" activeClassName="is-active">
      Shop
    </NavLink>
    <NavLink to="/products" activeClassName="is-active">
      Products
    </NavLink>
    <NavLink to="/sections" activeClassName="is-active">
      Sections
    </NavLink>
  </nav>
);

export default MainNavigation;
