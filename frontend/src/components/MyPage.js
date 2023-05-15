import React from 'react';
import { Nav } from './Nav';
import { Link, Outlet } from 'react-router-dom';

export const MyPage = () => {
  return (
    <div>
      <h1>My Page</h1>
      <Nav />
      <div className='tabs'>
        <Link to={'/user/mypage/mycards'} className='tab'>
          My Cards
        </Link>
        <Link to={'/user/mypage/notifications'} className='tab'>
          Notifications
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
