import { Link } from 'react-router-dom';

export const Tabs = ({ handleSetIsTabClicked }) => {
  return (
    <div className='tabs'>
      <Link
        to='/bands'
        className='tab'
        onClick={() => {
          handleSetIsTabClicked(true);
        }}
      >
        Bands
      </Link>
      <Link
        to='/musicians'
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
