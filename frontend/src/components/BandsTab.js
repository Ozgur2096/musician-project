import { useContext } from 'react';
import { BandCard } from './BandCard';
import { GlobalContext } from '../context/GlobalState';

export const BandsTab = () => {
  const { bands, isLoggedIn, userId } = useContext(GlobalContext);

  if (bands.length > 0) {
    return (
      <ul className='cards'>
        {isLoggedIn
          ? bands
              .filter(band => band.userId !== userId)
              .map(band => <BandCard key={band._id} band={band} />)
          : bands.map(band => <BandCard key={band._id} band={band} />)}
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
};
