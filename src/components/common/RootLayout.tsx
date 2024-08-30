import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const RootLayout: React.FC = () => {
  return (
    <div>
      <Header />
      <main>        
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <Footer/>
    </div>
  );
};

export default RootLayout;