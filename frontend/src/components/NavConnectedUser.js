import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

export const NavConnectedUser = () => {
  const { handleLogOut } = useContext(GlobalContext);
  return (
    <div className='nav-disconnected-user'>
      <Link to={'/user/mypage'}>My Page</Link>
      <Link to={'/user/favorites'}>Favorites</Link>
      <Link
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
