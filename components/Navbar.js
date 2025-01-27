'use client'; // Mark this as a Client Component
import { Chart, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" noWrap>
          Healthcare Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;