import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
import { Heart } from './Heart';
import { ApplyButton } from './ApplyButton';

export const MusicianCard = ({ musician }) => {
  const { isLoggedIn } = useContext(GlobalContext);
  const { _id, firstName, lastName, genre, image_url } = musician;
  return (
    <li className='card'>
      <img src={image_url} alt='musician' />
      <div>
        Name: {firstName} {lastName}
      </div>
      <div>Genre: {genre}</div>
      {isLoggedIn && (
        <div className='fav-apply-container'>
          <Heart cardId={_id} />
          <ApplyButton />
        </div>
      )}
    </li>
  );
};
