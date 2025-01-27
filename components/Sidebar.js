'use client'; // Mark this as a Client Component
import { Chart, Bar, LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
Chart.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend);

import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { text: 'Dashboard', path: '/' },
    { text: 'Patients', path: '/patients' },
    { text: 'Appointments', path: '/appointments' },
    { text: 'Reports', path: '/reports' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            key={item.text}
            button= "true"
            component="div"
            onClick={() => router.push(item.path)}
            sx={{
              cursor: 'pointer', // Add a pointer cursor for better UX
            }}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
