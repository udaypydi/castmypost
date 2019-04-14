import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import sideBarStyles from './sideBar.styles';

function SideBar(props) {

  function renderSideBarChildren() {
    const { sideBarComponents } = props;
    return [];
  }
  
  return (
    <div css={sideBarStyles.container}>
      {renderSideBarChildren()}
    </div>
  )
}

export default withRouter(SideBar);

