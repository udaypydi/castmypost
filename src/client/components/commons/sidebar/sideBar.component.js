import React, { Component, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import sideBarStyles from './sideBar.styles';

function SideBar(props) {

  const [sideBarListCollapsed, setSideBarListCollapsed] = useState(true);

  function renderSideBarChildren() {
    const { sideBarComponents } = props;
    return [];
  }

  function toggleSideBar() {
    setSideBarListCollapsed(!sideBarListCollapsed);
  }
  
  return (
    <div css={css`${sideBarStyles.container} ${!sideBarListCollapsed ? sideBarStyles.expandedContainer : ''}`}>
      {sideBarListCollapsed ? (
         <Icon 
         name="list" 
         color="#fff" 
         css={sideBarStyles.icon} 
         onClick={toggleSideBar}
       />
      ) : 
      (
        <React.Fragment>
          <span>CastMyPost</span>
          <Icon
            name="close"
            css={sideBarStyles.icon}
            onClick={toggleSideBar}
          /> 
        </React.Fragment>  
      )
      }
      {renderSideBarChildren()}
    </div>
  )
}

export default withRouter(SideBar);

