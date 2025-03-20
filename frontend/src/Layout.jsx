import React from 'react';
import { Outlet } from 'react-router-dom';  // ✅ Import Outlet
import Header from './components/Header';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-4">
        <Outlet /> {/* ✅ This allows child components to render */}
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        © 2024 My Blog App
      </footer>
    </div>
  );
};

export default Layout;
