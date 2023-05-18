import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { BandCardForm } from './BandCardForm';
import { MusicianCardForm } from './MusicianCardForm';
import { MyMusicianCard } from './MyMusicianCard';
import { MyBandCard } from './MyBandCard';

export const MyCards = () => {
  const { userId, bands, musicians } = useContext(GlobalContext);
  const myBandCards = bands.filter(card => userId === card.userId);
  const myMusicianCards = musicians.filter(card => userId === card.userId);

  const [createBandCard, setCreateBandCard] = useState(false);
  const [createMusicianCard, setCreateMusicianCard] = useState(false);

  return (
    <>
      <div className='container-add-buttons'>
        <div className='container-add-button'>
          <button
            onClick={() => {
              setCreateBandCard(!createBandCard);
            }}
          >
            Add New Band Card
          </button>

          {createBandCard && (
            <BandCardForm setCreateBandCard={setCreateBandCard} />
          )}
        </div>
        <div className='container-add-button'>
          <button
            onClick={() => {
              setCreateMusicianCard(!createMusicianCard);
            }}
          >
            Add New Musician Card
          </button>
          {createMusicianCard && (
            <MusicianCardForm setCreateMusicianCard={setCreateMusicianCard} />
          )}
        </div>
      </div>

      <ul className='cards cards-mypage'>
        {myBandCards.length > 0 &&
          myBandCards.map(band => <MyBandCard key={band._id} band={band} />)}

        {myMusicianCards.length > 0 &&
          myMusicianCards.map(musician => (
            <MyMusicianCard key={musician._id} musician={musician} />
          ))}
      </ul>
    </>
  );
};
