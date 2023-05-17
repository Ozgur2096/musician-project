import { useContext } from 'react';
import { MusicianCard } from './MusicianCard';
import { GlobalContext } from '../context/GlobalState';

export const MusiciansTab = () => {
  const { musicians, isLoggedIn, userId } = useContext(GlobalContext);
  if (musicians.length > 0) {
    return (
      <ul className='cards cards-musicians'>
        {isLoggedIn
          ? musicians
              .filter(musician => musician.userId !== userId)
              .map(musician => (
                <MusicianCard key={musician._id} musician={musician} />
              ))
          : musicians.map(musician => (
              <MusicianCard key={musician._id} musician={musician} />
            ))}
      </ul>
    );
  } else {
    return <div>Loading..</div>;
  }
};
