import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MyMusicianCard } from './MyMusicianCard';
import { MyBandCard } from './MyBandCard';

export const MyNotifications = () => {
  const { userId, bands, musicians } = useContext(GlobalContext);
  const cards = [...bands, ...musicians].filter(
    card => userId === card.userId && card.userApplied.length > 0
  );
  return (
    <div className='container-notifications'>
      {cards.map(card => {
        return (
          <div key={card.cardId} className='container-notification'>
            <div>
              <h2>
                {card.userApplied.length}{' '}
                {card.userApplied.length < 2 ? 'person' : 'people'} applied for
                this card
              </h2>
              {card.userApplied.map(notification => (
                <div key={card.cardId} className='applicant'>
                  <div>Email: {notification.userEmail}</div>
                  <div>Message: {notification.message}</div>
                </div>
              ))}
            </div>

            <div>
              {card.cardType === 'musician' ? (
                <MyMusicianCard musician={card} />
              ) : (
                <MyBandCard band={card} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
