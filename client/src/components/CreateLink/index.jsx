import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import './index.scss';

const CreateLink = () => {
  return (
    <Link className="create-link" to="/streams/new">
      <Button className="auth-button" variant="contained" color="primary" onClick={() => {}}>
        新增影片
      </Button>
    </Link>
  );
};

export default CreateLink;
