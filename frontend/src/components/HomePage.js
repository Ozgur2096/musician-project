import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { useState } from 'react';
import { BandsTab } from './BandsTab';
import { Tabs } from './Tabs';

export const HomePage = () => {
  const [isTabClicked, setIsTabClicked] = useState(false);

  return (
    <>
      <Nav />
      <Tabs handleSetIsTabClicked={setIsTabClicked} />

      {isTabClicked ? <Outlet /> : <BandsTab />}
    </>
  );
};
