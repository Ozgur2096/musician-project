import React, { createContext, useState, useEffect } from 'react';
import { updateFavorites } from '../utils/updateFavorites';
import { fetchData } from '../utils/fetchData';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const [musicians, setMusicians] = useState([]);
  const [bands, setBands] = useState([]);

  const [favoriteIds, setFavoriteIds] = useState([]);

  // Check if the user is already logged in LOCAL STORAGE
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserId = localStorage.getItem('userId');
    const storedEmail = localStorage.getItem('userEmail');
    if (storedLoggedIn === 'true' && storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
      setUserEmail(storedEmail);
    }
  }, []);

  // Favorite Ids
  useEffect(() => {
    if (userId) {
      fetch(`/users/favorites/${userId}`)
        .then(response => response.json())
        .then(result => {
          setFavoriteIds([...result.favorites]);
        });
    }
  }, [userId]);

  function handleFavoriteId(cardId) {
    if (favoriteIds.includes(cardId)) {
      setFavoriteIds(favoriteIds.filter(id => id !== cardId));
    } else {
      setFavoriteIds([...favoriteIds, cardId]);
    }
  }

  // isLoggedIn and get user ID and LogOut
  const handleLoggedIn = (userId, userEmail) => {
    if (userId) {
      setIsLoggedIn(true);
      setUserId(userId);
      setUserEmail(userEmail);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userId', userId);
      localStorage.setItem('userEmail', userEmail);
    }
  };
  const handleLogOut = () => {
    updateFavorites(userId, favoriteIds);
    setUserId('');
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem(userId);
    localStorage.removeItem(userEmail);
  };

  // fetch data from the database and send
  useEffect(() => {
    fetchData('https://musician.onrender.com/bands', setBands);
    fetchData('https://musician.onrender.com/musicians', setMusicians);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        musicians,
        bands,
        handleLoggedIn,
        isLoggedIn,
        userId,
        userEmail,
        handleLogOut,
        favoriteIds,
        handleFavoriteId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
