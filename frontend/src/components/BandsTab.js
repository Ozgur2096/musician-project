import { useContext } from 'react';
import { BandCard } from './BandCard';
import { GlobalContext } from '../context/GlobalState';

export const BandsTab = () => {
  const { bands } = useContext(GlobalContext);

  return (
    <ul className='cards'>
      {bands.length > 0 ? (
        bands.map(band => <BandCard key={band._id} band={band} />)
      ) : (
        <div>Loading</div>
      )}
    </ul>
  );
};
