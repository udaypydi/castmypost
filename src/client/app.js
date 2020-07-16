import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root'
import Header from 'commons/header/header.component';
const Home = React.lazy(() => import('./components/home/home.component'));

// Index route. App execution starts from here.

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  )
}

export default hot(App);
