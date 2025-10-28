import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;