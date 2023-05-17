import { Heart } from './Heart';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
import { ApplyButton } from './ApplyButton';

export const BandCard = ({ band }) => {
  const { isLoggedIn } = useContext(GlobalContext);
  const { _id, name, genre, description, looking_for, image_url } = band;

  return (
    <li className='card'>
      <img src={image_url} alt='musician' />
      <div>{name}</div>
      <div>{genre}</div>
      <div>{description}</div>
      <div>
        Looking For:{' '}
        {looking_for.map(element => (
          <span className='searching-for' key={element}>
            {element}
          </span>
        ))}
      </div>
      {isLoggedIn && (
        <div>
          <div className='container-card-bottom'>
            <Heart cardId={_id} />
            <ApplyButton card={band} />
          </div>
        </div>
      )}
    </li>
  );
};
