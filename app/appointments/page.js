'use client';

import React from 'react';

const AppointmentsPage = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Appointments</h1>
    <p className="text-gray-500">This page will display a list of upcoming and past appointments.</p>

    {/* Placeholder for appointments */}
    <div className="mt-4 p-4 bg-gray-100 border rounded-lg">
      <p className="text-gray-700">No appointments scheduled.</p>
    </div>
  </div>
);

export default AppointmentsPage;
