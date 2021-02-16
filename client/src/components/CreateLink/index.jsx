import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import styles from './index.module.scss';

const CreateLink = () => {
  return (
    <Link className={styles.create_link} to="/streams/new">
      <Button variant="contained" color="primary" onClick={() => {}}>
        新增影片
      </Button>
    </Link>
  );
};

export default CreateLink;
