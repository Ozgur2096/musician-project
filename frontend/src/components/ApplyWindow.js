import { GlobalContext } from '../context/GlobalState';
import { useContext, useState } from 'react';
import { createOrUpdateCard } from '../utils/createOrUpdateCard';
import { MdClose, MdDone } from 'react-icons/md';

export const ApplyWindow = ({ card, setOpenApplyWindow, setIsApplied }) => {
  const { userId, userEmail } = useContext(GlobalContext);
  const { cardType, cardId, userApplied } = card;

  const [messageToCardOwner, setMessageToCardOwner] = useState('Hi!');

  const url =
    cardType === 'musician'
      ? `https://musician.onrender.com/musicians/${cardId}`
      : `https://musician.onrender.com/bands/${cardId}`;

  const handleApproveClick = () => {
    createOrUpdateCard(
      url,
      {
        userApplied: [
          ...userApplied,
          { userId, userEmail, message: messageToCardOwner },
        ],
      },
      'PATCH'
    );
  };
  return (
    <div className='apply-window'>
      <label htmlFor='message'>
        What do you want to tell the owner of the card:
      </label>
      <textarea
        id='message'
        name='message'
        value={messageToCardOwner}
        onChange={e => {
          setMessageToCardOwner(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleApproveClick();
          setIsApplied(true);
        }}
      >
        <MdDone />
      </button>
      <button
        onClick={() => {
          setOpenApplyWindow(false);
        }}
      >
        <MdClose />
      </button>
    </div>
  );
};
