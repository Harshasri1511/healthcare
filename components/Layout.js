'use client'; // Mark this as a Client Component
import { Chart, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* Adds spacing for the Navbar */}
        {children}
      </Box>
    </Box>
  );
};

export default Layout;