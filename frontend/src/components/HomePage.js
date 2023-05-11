import React, { useEffect } from 'react';

export const HomePage = () => {
  useEffect(() => {
    const fetchBands = async () => {
      const response = await fetch('/bands');
      const result = await response.json();
      console.log(result);
    };

    fetchBands();
  }, []);

  return <div>Home</div>;
};
