import React, { useState } from 'react';

import { withRouter } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Divider from 'commons/divider/divider.component';
import sideBarStyles from './sideBar.styles';
import { Paragraph } from 'commons/text/text.component';
import { SIDEBAR_ELEMENTS } from './sideBar.constants';

function SideBar(props) {


  const [sideBarListCollapsed, setSideBarListCollapsed] = useState(true);

  const [activeIndex, setActiveIndex] = useState(0);

  function setElementActive(index) {
    setActiveIndex(index);
    props.history.push(SIDEBAR_ELEMENTS[index].route);
  }


  function renderSideBarChildren() {
    return SIDEBAR_ELEMENTS.map((element, index) => (
      <div 
        css={css`${sideBarStyles.navigationItem} ${index === activeIndex ? sideBarStyles.active : ''}`} 
        onClick={() => setElementActive(index)}
      >
        <div css={sideBarStyles.iconContainer}><element.icon color={ index === activeIndex ? '#ffffff': '#a9afbb' } /></div>
        <Paragraph css={sideBarStyles.navigationElementText}>{element.title}</Paragraph>
      </div>
     
    ));
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

    <div css={sideBarStyles.container}>
     
        <div css={sideBarStyles.logo}>
          <Paragraph css={sideBarStyles.logoText}>CASTMYPOST</Paragraph>
          <Divider />
        </div>
        <div css={sideBarStyles.sidebarWrapper}>
          <div css={sideBarStyles.navigationBar}>
            {renderSideBarChildren()}
          </div>
        </div>
    </div>
  )
}

export default withRouter(SideBar);

