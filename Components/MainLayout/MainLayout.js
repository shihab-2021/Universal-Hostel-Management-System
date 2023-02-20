import React from 'react';
import Footer from '../Home/Footer';
import Navbar from '../nav';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  );
};

export default MainLayout;