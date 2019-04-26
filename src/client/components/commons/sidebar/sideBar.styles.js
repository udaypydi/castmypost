import { css, keyframes } from '@emotion/core';

const sideBarAnimationsEntry = css`
  from {
    width: 50px;
  }

  to {
    width: 150px;
  }
`;

const sideBarAnimationsExit = css`
  from {
    transform: 150px;
  }

  to {
    width: 50px;
  }
`;

const styles = {
  container: css`
    width: 50px;
    background-color: rgb(73, 107, 184);
    height: ${window.screen.availHeight}px;
    text-align: center;
    color: #fff;
    animation: ${sideBarAnimationsExit} 1s;
  `,

  expandedContainer: css `
    width: 150px;
    animation: ${sideBarAnimationsEntry} 1s;
  `,

  icon: css`
    color: '#fff',
    font-size: 18px !important; 
    margin: 10px !important;
    cursor: pointer;
  `
}

export default styles;
