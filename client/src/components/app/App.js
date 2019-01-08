import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routerRoutes } from '../../routes/routes';

export default function App() {
  return (
    <Router>
      <>
      <Switch>
        {routerRoutes()}
      </Switch>
      </>
    </Router>
  );
}
