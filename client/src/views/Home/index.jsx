import React from 'react';

import StreamList from '../../components/StreamList';

import styles from './index.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <StreamList></StreamList>
    </div>
  );
};

export default Home;
