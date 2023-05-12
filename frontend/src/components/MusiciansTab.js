import { useContext } from 'react';
import { MusicianCard } from './MusicianCard';
import { GlobalContext } from '../context/GlobalState';

export const MusiciansTab = () => {
  const { musicians } = useContext(GlobalContext);

  return (
    <ul className='cards'>
      {musicians.length > 0 ? (
        musicians.map(musician => (
          <MusicianCard key={musician._id} musician={musician} />
        ))
      ) : (
        <div>Loading..</div>
      )}
    </ul>
  );
};
