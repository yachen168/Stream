import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from '../GoogleAuth';
import styles from './index.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <header>
        <div className={styles.brand}>
          <Link to="/">Streamer</Link>
        </div>
        <div className={styles.menu}>
          <Link to="/">All Streams</Link>
          <GoogleAuth />
        </div>
      </header>
    </div>
  );
};

export default Header;
