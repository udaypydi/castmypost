import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from './theme';
import App from './app';
import Header from 'commons/header/header.component';
import Sidebar from 'commons/sidebar/sidebar.component';
import FalbackRoute from 'components/notfound/fallback.component';
import Dashboard from 'components/dashboard/dashboard.component';


const RouterDiv = styled.div`
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

const ComponentDiv = styled.div`
  margin: 0;
  padding: 0;
  margin-left: 260px;
  width: calc(100vw - 260px);
  height: 100vh;
`

const DefaultLayout = ({component: Component, common,  ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <RouterDiv>
          {
            common.header && (
              <Header 
                changeHeaderColorOnScroll={false}
                headerColor={colors.primaryColor}
                showHeaderElements 
              />
            )
          }
          {
            common.sidebar && (
              <Sidebar />
            )
          }
          <ComponentDiv>
            <Component {...matchProps} />   
          </ComponentDiv>
      </RouterDiv>
       
    )} />
  )
};

function AppRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <DefaultLayout path="/dashboard" common={{ header: false, sidebar: true }} component={Dashboard} />
        <Route path="/notfound" component={FalbackRoute} />
      </div>
    </Router>
  )
}

export default AppRouter;
