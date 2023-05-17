import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const Logo = () => {
  const { isLoggedIn } = useContext(GlobalContext);
  return (
    <Link className='nav-item' to={isLoggedIn ? '/user/home/bands' : '/bands'}>
      Logo + Home
    </Link>
  );
};
