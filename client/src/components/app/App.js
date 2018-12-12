import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { routerRoutes } from '../../routes/routes';
import styles from './App.css';

export default function App() {
  return (
    <Router>
      <>
      <div>
        <h1 className={styles.headText}>Multnomah Legal Aid</h1>
      </div>
      <Switch>
        {routerRoutes()}
      </Switch>
      </>
    </Router>
  );
}
