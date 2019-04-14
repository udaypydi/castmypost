import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './app';
import FalbackRoute from 'components/notfound/fallback.component';
import Dashboard from 'components/dashboard/dashboard.component';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/notfound" component={FalbackRoute} />
      </div>
    </Router>
  )
}

export default AppRouter;
