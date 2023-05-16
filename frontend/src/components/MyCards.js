import React, { useContext, useState } from 'react';
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
      <div>
        <button
          onClick={() => {
            setCreateBandCard(true);
          }}
        >
          Add New Band Card
        </button>

        {createBandCard && (
          <BandCardForm setCreateBandCard={setCreateBandCard} />
        )}
      </div>
      <div>
        <button
          onClick={() => {
            setCreateMusicianCard(true);
          }}
        >
          Add New Musician Card
        </button>
        {createMusicianCard && (
          <MusicianCardForm setCreateMusicianCard={setCreateMusicianCard} />
        )}
      </div>
      <h3>Bands</h3>
      <ul className='cards'>
        {myBandCards.length > 0 &&
          myBandCards.map(band => <MyBandCard key={band._id} band={band} />)}
      </ul>
      <h3>Musicians</h3>
      <ul className='cards'>
        {myMusicianCards.length > 0 &&
          myMusicianCards.map(musician => (
            <MyMusicianCard key={musician._id} musician={musician} />
          ))}
      </ul>
    </>
  );
};
