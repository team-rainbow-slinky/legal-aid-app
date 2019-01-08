import React from 'react';
import { Route, Link } from 'react-router-dom';
import OrgHome from '../components/orgHome/OrgHome';
import { withSession } from '../components/auth/withSession';
import { Login } from '../containers/auth/Auth';
import BookingDetailContainer from '../containers/BookingDetailContainer';
import SearchMCSO from '../containers/SearchMCSO';
import About from '../components/about/About';


export const ROUTES = {
  ORGHOME: {
    path: '/',
    Component: withSession(OrgHome),
    linkTo: () => '/'
  },
  LOGIN: {
    path: '/login',
    Component: Login,
    linkTo: () => '/login'
  },
  BOOKING_DETAIL: {
    path: '/bookings/:id',
    Component: withSession(BookingDetailContainer),
    linkTo: id => `/bookings/${id}`
  },
  SEARCHMCSO: {
    path: '/search_mcso',
    Component: withSession(SearchMCSO),
    linkTo: () => '/search_mcso'
  },
  ABOUT: {
    path: '/about',
    Component: About,
    linkTo: () => '/about'
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
