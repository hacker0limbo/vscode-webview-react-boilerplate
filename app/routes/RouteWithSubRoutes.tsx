import React from 'react';
import { Route } from 'react-router-dom';
import { RouteConfig } from './config';

export const RouteWithSubRoutes = (route: RouteConfig) => {
  return (
    <Route path={route.path} exact={route.exact}>
      <route.component routes={route.routes} />
    </Route>
  );
};
