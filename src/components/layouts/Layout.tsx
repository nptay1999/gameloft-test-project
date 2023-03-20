import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SocialIcons from './SocialIcons';

function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <SocialIcons />
    </>
  );
}

export default Layout;
