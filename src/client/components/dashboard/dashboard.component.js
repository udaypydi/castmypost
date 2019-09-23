import React from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'commons/button/defaultbutton.component';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import dashboardStyles from './dashboard.styles';

function Dashboard(props) {
  return (
    <div css={dashboardStyles.container}>
      <div>
        <img 
          style={{ height: 300 }}
          src="https://staticassets.gannettdigital.com/gci-static-assets/assets/global/static-web/device-icons@2x.png" 
        />
        <h1>No Accounts Found</h1>
        <Button>Get Started</Button>
      </div>
    </div>
  )
}

export default withRouter(Dashboard);
