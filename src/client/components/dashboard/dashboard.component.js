import React from 'react';
import { withRouter } from 'react-router-dom';
import SideBar from 'commons/sidebar/sideBar.component';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import dashboardStyles from './dashboard.styles';

function Dashboard(props) {
  return (
    <div css={dashboardStyles.container}>
      <SideBar />
    </div>
  )
}

export default withRouter(Dashboard);
