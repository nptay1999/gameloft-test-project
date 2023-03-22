import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import SocialIcons from './SocialIcons';

function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      <SocialIcons />
    </>
  );
}

export default Layout;
