import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

export const NavConnectedUser = () => {
  const { handleLogOut } = useContext(GlobalContext);

  return (
    <div className='nav-right'>
      <Link className='nav-item' to={'/user/mypage'}>
        My Page
      </Link>
      <Link className='nav-item' to={'/user/favorites'}>
        Favorites
      </Link>
      <Link
        className='nav-item'
        to={'/'}
        onClick={() => {
          handleLogOut();
        }}
      >
        Log Out
      </Link>
    </div>
  );
};
