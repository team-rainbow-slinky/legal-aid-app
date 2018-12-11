import React from 'react';
import { Route, Link } from 'react-router-dom';
import OrgHome from '../components/orgHome/OrgHome';
import { withSession } from '../components/auth/withSession';
import { Login } from '../containers/auth/Auth';

export const ROUTES = {
  ORGHOME: {
    path: '/',
    Component: withSession(OrgHome),
    linkTo: () => '/' // will need orgId added
  },
  LOGIN: {
    path: '/login',
    Component: Login,
    linkTo: () => '/login'
  }
};

export const rootLinks = () => {
  return Object.keys(ROUTES)
    .filter(routeName => ROUTES[routeName].linkTo.length === 0)
    .map((routeName, i) => {
      return <Link key={i} to={ROUTES[routeName].linkTo()}>{routeName.toLowerCase().replace('_', ' ')}</Link>;
    });
};

export const routerRoutes = () => {
  return Object.values(ROUTES)
    .map((route, i) => {
      return <Route exact={route.linkTo.length === 0} key={i} path={route.path} component={route.Component} />;
    });
};
