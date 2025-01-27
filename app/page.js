"use client";
import Layout from '../components/Layout';
// Remove the local BarChart import since we're using Recharts directly
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {
  // Restructured data for Recharts
  const data = [
    { name: 'January', patients: 65 },
    { name: 'February', patients: 59 },
    { name: 'March', patients: 80 },
    { name: 'April', patients: 81 },
    { name: 'May', patients: 56 },
  ];

  return (
    <Layout>
      <h1>Dashboard</h1>
      <div className="w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar 
              dataKey="patients" 
              fill="rgba(75, 192, 192, 0.2)" 
              stroke="rgba(75, 192, 192, 1)" 
              strokeWidth={1}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Layout>
  );
}