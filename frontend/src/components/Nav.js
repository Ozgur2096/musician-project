import React from 'react';
import { Logo } from './Logo';
import { NavDisconnectedUser } from './NavDisconnectedUser';

export const Nav = () => {
  return (
    <div className='nav'>
      <Logo />
      <NavDisconnectedUser />
    </div>
  );
};
