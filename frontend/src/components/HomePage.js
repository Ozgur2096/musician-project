import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { Tabs } from './Tabs';

export const HomePage = () => {
  return (
    <>
      <Nav />
      <Tabs />
      <Outlet />
    </>
  );
};
