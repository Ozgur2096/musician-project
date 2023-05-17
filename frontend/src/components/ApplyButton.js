import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

export const ApplyButton = ({ card }) => {
  const { userId } = useContext(GlobalContext);
  return (
    <button
      onClick={() => {
        console.log(card);
        console.log(userId);
      }}
    >
      Apply
    </button>
  );
};
