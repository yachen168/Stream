import React from 'react';

import Button from '@material-ui/core/Button';

import './index.scss';

const AdminButtons = ({ onEdit, onDelete }) => {
  return (
    <div className="admin-buttons">
      <Button className="auth-button" variant="contained" onClick={onEdit}>
        編輯
      </Button>
      <Button className="auth-button" variant="contained" color="secondary" onClick={onDelete}>
        刪除
      </Button>
    </div>
  );
};

export default AdminButtons;
