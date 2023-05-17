import { Link } from 'react-router-dom';

import React from 'react';

export const NavDisconnectedUser = () => {
  return (
    <div className='nav-right'>
      <Link className='nav-item' to={'/login'}>
        Log in
      </Link>
      <Link className='nav-item' to={'/register'}>
        Register
      </Link>
    </div>
  );
};
