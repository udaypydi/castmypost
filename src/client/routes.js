import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
import FalbackRoute from './components/notfound/fallback.component';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/notfound" component={FalbackRoute} />
      </div>
    </Router>
  )
}

export default AppRouter;
