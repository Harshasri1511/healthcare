import React from 'react';
import { Calendar } from 'lucide-react';

const Navbar = () => (
  <header className="flex justify-between items-center p-4 bg-white shadow">
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <div className="flex items-center gap-2 text-gray-500">
      <Calendar className="h-5 w-5" />
      <span>
        {new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </span>
    </div>
  </header>
);

export default Navbar;
