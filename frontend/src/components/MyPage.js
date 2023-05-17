import React, { useState } from 'react';
import { Nav } from './Nav';
import { Link, Outlet } from 'react-router-dom';

export const MyPage = () => {
  const [isSelected, setIsSelected] = useState({
    myCards: true,
    notifications: false,
  });
  return (
    <>
      <div className='container-mypage'>
        <div className='tabs tabs-column'>
          <Link
            to={'/user/mypage/mycards'}
            onClick={() => {
              setIsSelected({ myCards: true, notifications: false });
            }}
            className={isSelected.myCards ? 'tab tab-selected' : 'tab'}
          >
            My Cards
          </Link>
          <Link
            to={'/user/mypage/notifications'}
            onClick={() => {
              setIsSelected({ myCards: false, notifications: true });
            }}
            className={isSelected.notifications ? 'tab tab-selected' : 'tab'}
          >
            Notifications
          </Link>
        </div>
        <div className='mypage-right'>
          {' '}
          <Nav />
          <h1>My Page</h1>
          <Outlet />
        </div>
      </div>
    </>
  );
};
