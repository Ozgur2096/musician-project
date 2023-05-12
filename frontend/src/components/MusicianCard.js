import React from 'react';

export const MusicianCard = ({ musician }) => {
  const { firstName, lastName, genre } = musician;
  return (
    <li className='card'>
      <div>
        Name: {firstName} {lastName}
      </div>
      <div>Genre: {genre}</div>
    </li>
  );
};
