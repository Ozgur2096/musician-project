import { Heart } from './Heart';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
import { ApplyButton } from './ApplyButton';

export const BandCard = ({ band }) => {
  const { isLoggedIn } = useContext(GlobalContext);
  const { _id, name, genre, description, image_url } = band;
  return (
    <li className='card'>
      <img src={image_url} alt='musician' />
      <div>Name: {name}</div>
      <div>Genre: {genre}</div>
      <div>Description: {description}</div>
      {isLoggedIn && (
        <div className='fav-apply-container'>
          <Heart cardId={_id} />
          <ApplyButton />
        </div>
      )}
    </li>
  );
};
