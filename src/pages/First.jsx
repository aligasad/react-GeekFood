import React from 'react';
import Header from '../assets/Header.jsx';
import Footer from '../assets/Footer.jsx';
import { Outlet } from 'react-router-dom';

function First() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default First
