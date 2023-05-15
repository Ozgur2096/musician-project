import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { useState } from 'react';
import { BandsTab } from './BandsTab';
import { Tabs } from './Tabs';

export const HomePageUser = () => {
  const [isTabClicked, setIsTabClicked] = useState(false);

  return (
    <>
      <h1>Welcome to your personal page</h1>
      <Nav />
      <Tabs handleSetIsTabClicked={setIsTabClicked} />

      {isTabClicked ? <Outlet /> : <BandsTab />}
    </>
  );
};
