import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Header from './Header';
import SidePanel from './SidePanel';

const DRAWER_WIDTH = 240; // Define the width of the side panel

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const showSidebar = location.pathname !== '/dashboard';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header 
        showSidebar={showSidebar} 
        sidebarOpen={sidebarOpen} 
        drawerWidth={DRAWER_WIDTH}
      />
      <Box sx={{ display: 'flex', flexGrow: 1, overflow: 'hidden' }}>
        {showSidebar && (
          <SidePanel open={sidebarOpen} toggleDrawer={toggleSidebar} />
        )}
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1, 
            p: 3, 
            overflow: 'auto',
            marginLeft: showSidebar ? (sidebarOpen ? `${DRAWER_WIDTH}px` : theme => theme.spacing(7)) : 0,
            transition: theme => theme.transitions.create('margin', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
