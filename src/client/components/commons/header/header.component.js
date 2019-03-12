import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import styles from './header.styles';

function Header(props) {
  const [headerColor, setHeaderColor] = useState('transparent');

  const scrollEventHandler = event => {
    if (window.scrollY> 50 && window.scrollY < window.screen.availHeight) {
      setHeaderColor('rgba(80, 128, 195, 0.3)');
    } else if(window.scrollY > window.screen.availHeight) {
      setHeaderColor('rgb(73, 107, 184)');
    } else {
      setHeaderColor('transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollEventHandler)
    return () => {
      window.removeEventListener('scroll', scrollEventHandler)
    }
  });

  return (
    <div css={styles.headerContainer} style={{ backgroundColor: headerColor }}>
        <p css={styles.companyName}>castmypost</p>
        {props.headerElements && (
           <div css={styles.headerElementsContainer}>
              <div css={styles.headerElement}>
                <p>SIGNUP</p>
              </div>
              <div css={styles.headerElement}>
                <p>LOGIN</p>
              </div>
           </div>
        )}
    </div>
  );
}

Header.propTypes = {
  headerElements: PropTypes.bool.isRequired,
};

export default Header;
