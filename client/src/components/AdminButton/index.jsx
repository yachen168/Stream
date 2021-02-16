import React from 'react';

import Button from '@material-ui/core/Button';

import styles from './index.module.scss';

const AdminButtons = ({ onEdit, onDelete }) => {
  return (
    <div className={styles.admin_buttons}>
      <Button variant="contained" onClick={onEdit}>
        編輯
      </Button>
      <Button variant="contained" color="secondary" onClick={onDelete}>
        刪除
      </Button>
    </div>
  );
};

export default AdminButtons;
