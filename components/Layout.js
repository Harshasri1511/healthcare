import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  </div>
);

export default Layout;
