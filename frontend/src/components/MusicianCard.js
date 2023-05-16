import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
import { Heart } from './Heart';
import { ApplyButton } from './ApplyButton';

export const MusicianCard = ({ musician }) => {
  const { isLoggedIn } = useContext(GlobalContext);
  const {
    _id,
    firstName,
    lastName,
    instrument,
    genre,
    description,
    image_url,
  } = musician;

  return (
    <li className='card'>
      <img src={image_url} alt='musician' />
      <div>
        {firstName} {lastName}
      </div>
      <div>
        Instrument:{' '}
        {instrument.map(element => (
          <span className='instrument' key={element}>
            {element}
          </span>
        ))}
      </div>
      <div> {genre}</div>
      <div>{description}</div>
      {isLoggedIn && (
        <div className='fav-apply-container'>
          <Heart cardId={_id} />
          <ApplyButton />
        </div>
      )}
    </li>
  );
};
