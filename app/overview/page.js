'use client';

import React from 'react';
import CustomBarChart from '@/components/Barchart';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Sample data
const monthlyData = [
  { name: 'January', patients: 65, revenue: 12500, appointments: 120 },
  { name: 'February', patients: 59, revenue: 11000, appointments: 110 },
  { name: 'March', patients: 80, revenue: 15000, appointments: 150 },
  { name: 'April', patients: 81, revenue: 15500, appointments: 155 },
  { name: 'May', patients: 56, revenue: 10000, appointments: 100 },
];

const OverviewPage = () => (
  <div className="grid gap-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Patients</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">341</p>
          <p className="text-sm text-green-500">+12.5% from last month</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">$64,000</p>
          <p className="text-sm text-green-500">+8.2% from last month</p>
        </CardContent>
      </Card>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <CustomBarChart data={monthlyData} dataKey="patients" title="Monthly Patients" />
    </div>
  </div>
);

export default OverviewPage;
