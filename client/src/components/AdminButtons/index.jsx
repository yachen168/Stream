import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './index.module.scss';

const AdminButtons = ({ stream, onDelete }) => {
  return (
    <div className={styles.admin_buttons}>
      <Link to={`/streams/edit/${stream.id}`}>編輯</Link>
      <Button variant="contained" color="secondary" onClick={onDelete}>
        刪除
      </Button>
    </div>
  );
};

export default AdminButtons;
