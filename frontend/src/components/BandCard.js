export const BandCard = ({ band }) => {
  const { name, genre } = band;
  return (
    <li className='card'>
      <div>Name: {name}</div>
      <div>Genre: {genre}</div>
    </li>
  );
};
