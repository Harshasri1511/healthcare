import React from 'react';
import Link from 'next/link';

const Sidebar = () => (
  <aside className="w-64 bg-gray-900 text-white min-h-screen p-4">
    <h2 className="text-xl font-bold mb-4">H-Health</h2>
    <nav>
      <ul>
        <li className="mb-2">
          <Link href="/app/overview" className="hover:text-gray-300">
            Overview
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/app/appointments" className="hover:text-gray-300">
            Appointments
          </Link>
        </li>
        <li className="mb-2">
          <Link href="/app/patients" className="hover:text-gray-300">
            Patients
          </Link>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
