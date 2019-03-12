import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader/root'
import Header from 'commons/header/header.component';
const Home = React.lazy(() => import('./components/home/home.component'));


function App() {
  return (
    <div>
       <Header headerElements/>
       <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
    </div>
  )
}

export default hot(App);
