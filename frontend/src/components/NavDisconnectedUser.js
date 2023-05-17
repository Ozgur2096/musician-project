import { Link } from 'react-router-dom';

import React from 'react';

export const NavDisconnectedUser = () => {
  return (
    <div className='nav-right'>
      <Link to={'/login'}>Log in</Link>
      <Link to={'/register'}>Register</Link>
    </div>
  );
};
