import { useContext } from 'react';
import { Nav } from './Nav';
import { GlobalContext } from '../context/GlobalState';
import { BandCard } from './BandCard';
import { MusicianCard } from './MusicianCard';

export const Favorites = () => {
  const { musicians, bands, favoriteIds } = useContext(GlobalContext);
  const favBands = bands.filter(band => favoriteIds.includes(band._id));
  const favMusicians = musicians.filter(musician =>
    favoriteIds.includes(musician._id)
  );

  return (
    <div>
      <Nav />
      <h1>Favorites</h1>
      <h3>Bands</h3>
      <ul className='cards'>
        {favBands.length > 0 ? (
          favBands.map(band => <BandCard key={band._id} band={band} />)
        ) : (
          <div className='message'>
            You haven't chosen any favorite band yet!
          </div>
        )}
      </ul>
      <h3>Musicians</h3>
      <ul className='cards cards-musicians'>
        {favMusicians.length > 0 ? (
          favMusicians.map(musician => (
            <MusicianCard key={musician._id} musician={musician} />
          ))
        ) : (
          <div className='message'>
            You haven't chosen any favorite musician yet!
          </div>
        )}
      </ul>
    </div>
  );
};
