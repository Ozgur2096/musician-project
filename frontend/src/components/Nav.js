import React, { useContext } from 'react';
import { Logo } from './Logo';
import { NavDisconnectedUser } from './NavDisconnectedUser';
import { NavConnectedUser } from './NavConnectedUser';
import { GlobalContext } from '../context/GlobalState';

export const Nav = () => {
  const { isLoggedIn } = useContext(GlobalContext);
  return (
    <div className='nav'>
      <Logo />
      {isLoggedIn ? <NavConnectedUser /> : <NavDisconnectedUser />}
    </div>
  );
};
