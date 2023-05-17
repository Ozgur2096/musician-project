import React, { createContext, useState, useEffect } from 'react';
import { updateFavorites } from '../utils/updateFavorites';
import { fetchData } from '../utils/fetchData';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const [musicians, setMusicians] = useState([]);
  const [bands, setBands] = useState([]);

  const [favoriteIds, setFavoriteIds] = useState([]);

  // Check if the user is already logged in LOCAL STORAGE
  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUserId = localStorage.getItem('userId');
    if (storedLoggedIn === 'true' && storedUserId) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
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
  const handleLoggedIn = userId => {
    if (userId) {
      setIsLoggedIn(true);
      setUserId(userId);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userId', userId);
    }
  };
  const handleLogOut = () => {
    updateFavorites(userId, favoriteIds);
    setUserId('');
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem(userId);
  };

  // fetch data from the database and send
  useEffect(() => {
    fetchData('/bands', setBands);
    fetchData('/musicians', setMusicians);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        musicians,
        bands,
        handleLoggedIn,
        isLoggedIn,
        userId,
        handleLogOut,
        favoriteIds,
        handleFavoriteId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
