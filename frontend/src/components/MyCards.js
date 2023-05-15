import React, { useContext, useState } from 'react';
import { MdAddBox } from 'react-icons/md';
import { GlobalContext } from '../context/GlobalState';
import { BandCard } from './BandCard';
import { MusicianCard } from './MusicianCard';
import { BandCardForm } from './BandCardForm';
import { MusicianCardForm } from './MusicianCardForm';

export const MyCards = () => {
  const { userId, bands, musicians } = useContext(GlobalContext);
  const myBandCards = bands.filter(card => userId === card.userId);
  const myMusicianCards = musicians.filter(card => userId === card.userId);

  const [createBandCard, setCreateBandCard] = useState(false);
  const [createMusicianCard, setCreateMusicianCard] = useState(false);

  return (
    <>
      <div>
        <div>Add New Band Card</div>
        <button
          onClick={() => {
            setCreateBandCard(true);
          }}
        >
          <MdAddBox className='md-icons' />
        </button>
        {createBandCard && (
          <BandCardForm setCreateBandCard={setCreateBandCard} />
        )}
      </div>
      <div>
        <div>Add New Musician Card</div>
        <button
          onClick={() => {
            setCreateMusicianCard(true);
          }}
        >
          <MdAddBox className='md-icons' />
        </button>
        {createMusicianCard && (
          <MusicianCardForm setCreateMusicianCard={setCreateMusicianCard} />
        )}
      </div>
      <div>
        {myBandCards.length > 0 &&
          myBandCards.map(band => <BandCard key={band._id} band={band} />)}
        {myMusicianCards.length > 0 &&
          myMusicianCards.map(musician => (
            <MusicianCard key={musician._id} musician={musician} />
          ))}
      </div>
    </>
  );
};
