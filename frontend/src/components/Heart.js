import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Heart = ({ cardId }) => {
  const { handleFavoriteId, favoriteIds } = useContext(GlobalContext);
  const isFavorite = favoriteIds.includes(cardId);
  return (
    <div
      onClick={e => {
        e.preventDefault();
        handleFavoriteId(cardId);
      }}
    >
      {isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
    </div>
  );
};
