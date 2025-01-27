'use client';

import React from 'react';

const PatientsPage = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4">Patients</h1>
    <p className="text-gray-500">This page will display a list of patients with their details.</p>

    {/* Placeholder for patients */}
    <div className="mt-4 p-4 bg-gray-100 border rounded-lg">
      <p className="text-gray-700">No patient data available.</p>
    </div>
  </div>
);

export default PatientsPage;
