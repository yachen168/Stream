import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from '../GoogleAuth';
import './index.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <Link to="/">Streamer</Link>
      </div>
      <div className="menu">
        <Link to="/">All Streams</Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
