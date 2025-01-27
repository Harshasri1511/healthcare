"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Activity, Users, TrendingUp, Calendar } from 'lucide-react';
import "./globals.css"

const monthlyData = [
  { name: 'January', patients: 65, revenue: 12500, appointments: 120 },
  { name: 'February', patients: 59, revenue: 11000, appointments: 110 },
  { name: 'March', patients: 80, revenue: 15000, appointments: 150 },
  { name: 'April', patients: 81, revenue: 15500, appointments: 155 },
  { name: 'May', patients: 56, revenue: 10000, appointments: 100 },
];

const dailyData = [
  { day: 'Mon', visits: 45 },
  { day: 'Tue', visits: 52 },
  { day: 'Wed', visits: 49 },
  { day: 'Thu', visits: 63 },
  { day: 'Fri', visits: 58 },
  { day: 'Sat', visits: 35 },
  { day: 'Sun', visits: 30 },
];

export default function PremiumDashboard() {
  return (
    <div className="flex flex-col gap-6 p-8 bg-[#FFF] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center text-white">
        <div>
          <h1 className="text-3xl text-black font-bold tracking-tight">Dashboard</h1>
          <p className="text-gray-400">Welcome back to your clinic overview</p>
        </div>
        <div className="flex gap-2">
          <Calendar className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-400">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-xl hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-black font-bold">341</div>
            <p className="text-xs text-green-400">+12.5% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-teal-600 to-teal-800 text-white shadow-xl hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-black font-bold">$64,000</div>
            <p className="text-xs text-green-400">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-rose-600 to-rose-800 text-white shadow-xl hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-black font-bold">635</div>
            <p className="text-xs text-red-400">-2.3% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-yellow-600 to-yellow-800 text-white shadow-xl hover:scale-105 transition-transform duration-300">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-200">Activity</CardTitle>
            <Activity className="h-4 w-4 text-black" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl text-black font-bold">89%</div>
            <p className="text-xs text-green-400">+4.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-xl">
              <CardHeader>
                <CardTitle>Monthly Patients</CardTitle>
                <CardDescription>Patient visits over the past 5 months</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="patients" 
                      fill="rgba(99, 102, 241, 0.8)" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white shadow-xl">
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Patient visits this week</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dailyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="visits" 
                      stroke="rgba(99, 102, 241, 0.8)" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white shadow-xl">
              <CardHeader>
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue analysis</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      fill="rgba(99, 102, 241, 0.2)" 
                      stroke="rgba(99, 102, 241, 0.8)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="lg:col-span-3 bg-gradient-to-r from-teal-600 to-teal-800 text-white shadow-xl">
              <CardHeader>
                <CardTitle>Appointments</CardTitle>
                <CardDescription>Monthly appointment statistics</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar 
                      dataKey="appointments" 
                      fill="rgba(99, 102, 241, 0.8)" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
