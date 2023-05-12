import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [musicians, setMusicians] = useState([]);
  const [bands, setBands] = useState([]);

  useEffect(() => {
    const fetchBands = async () => {
      const response = await fetch('/bands');
      const result = await response.json();
      console.log(result);
      setBands(result);
    };

    fetchBands();
  }, []);

  useEffect(() => {
    const fetchMusicians = async () => {
      const response = await fetch('/musicians');
      const result = await response.json();
      console.log(result);
      setMusicians(result);
    };

    fetchMusicians();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        musicians,
        bands,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
