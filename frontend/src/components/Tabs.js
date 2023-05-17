import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

export const Tabs = () => {
  const { isLoggedIn } = useContext(GlobalContext);
  return (
    <div className='tabs'>
      <Link to={isLoggedIn ? '/user/home/bands' : '/bands'} className='tab'>
        Bands
      </Link>
      <Link
        to={isLoggedIn ? '/user/home/musicians' : '/musicians'}
        className='tab tab-musicians'
      >
        Musicians
      </Link>
    </div>
  );
};
