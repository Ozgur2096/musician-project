import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';
import { Tabs } from './Tabs';

export const HomePageUser = () => {
  return (
    <>
      <h1>Welcome to your personal page</h1>
      <Nav />
      <Tabs />
      <Outlet />
    </>
  );
};
