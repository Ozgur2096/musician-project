import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

export const Tabs = ({ handleSetIsTabClicked }) => {
  const { isLoggedIn } = useContext(GlobalContext);
  return (
    <div className='tabs'>
      <Link
        to={isLoggedIn ? '/user/home/bands' : '/bands'}
        className='tab'
        onClick={() => {
          handleSetIsTabClicked(true);
        }}
      >
        Bands
      </Link>
      <Link
        to={isLoggedIn ? '/user/home/musicians' : '/musicians'}
        className='tab'
        onClick={() => {
          handleSetIsTabClicked(true);
        }}
      >
        Musicians
      </Link>
    </div>
  );
};
