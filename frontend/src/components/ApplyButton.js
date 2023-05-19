import { GlobalContext } from '../context/GlobalState';
import { useContext, useState } from 'react';
import { ApplyWindow } from './ApplyWindow';

export const ApplyButton = ({ card }) => {
  const { userEmail } = useContext(GlobalContext);
  const { userApplied } = card;

  const [openApplyWindow, setOpenApplyWindow] = useState(false);
  const [isApplied, setIsApplied] = useState(
    userApplied.some(user => user.userEmail === userEmail)
  );

  if (isApplied) {
    return <div>Applied</div>;
  } else {
    return (
      <>
        <button
          onClick={() => {
            setOpenApplyWindow(true);
          }}
        >
          Apply
        </button>
        {openApplyWindow && (
          <ApplyWindow
            card={card}
            setOpenApplyWindow={setOpenApplyWindow}
            setIsApplied={setIsApplied}
          />
        )}
      </>
    );
  }
};
