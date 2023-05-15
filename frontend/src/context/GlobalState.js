import React, { createContext, useState, useEffect } from 'react';
import { updateFavorites } from '../utils/updateFavorites';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');

  const [musicians, setMusicians] = useState([]);
  const [bands, setBands] = useState([]);

  const [favoriteIds, setFavoriteIds] = useState([]);

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
    setIsLoggedIn(true);
    setUserId(userId);
  };
  const handleLogOut = () => {
    updateFavorites(userId, favoriteIds);
    setUserId('');
    setIsLoggedIn(false);
  };

  // fetch data from the database and send
  useEffect(() => {
    const fetchBands = async () => {
      const response = await fetch('/bands');
      const result = await response.json();
      setBands(result);
    };
    fetchBands();
  }, []);

  useEffect(() => {
    const fetchMusicians = async () => {
      const response = await fetch('/musicians');
      const result = await response.json();
      setMusicians(result);
    };
    fetchMusicians();
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
