import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, useTheme } from '@mui/material';
import Header from './Header';
import SidePanel from './SidePanel';
import { Toolbar } from '@mui/material';

const DRAWER_WIDTH = 240;
const COLLAPSED_DRAWER_WIDTH = 64; // Width of the collapsed sidebar

const Layout = ({ sidebarOpen, toggleSidebar, toggleTheme, mode }) => {
  const location = useLocation();
  const theme = useTheme();

  const showSidebar = !['/', '/dashboard'].includes(location.pathname);

  return (
    <Box sx={{ 
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: theme.palette.background.default,
      backgroundImage: `linear-gradient(to bottom right, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
    }}>
      <Header 
        showSidebar={showSidebar} 
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        toggleTheme={toggleTheme}
        mode={mode}
      />
      {showSidebar && (
        <SidePanel open={sidebarOpen} toggleDrawer={toggleSidebar} />
      )}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          width: '100%',
          marginLeft: showSidebar ? (sidebarOpen ? `${DRAWER_WIDTH}px` : `${COLLAPSED_DRAWER_WIDTH}px`) : 0,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Toolbar /> {/* This pushes the content below the AppBar */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
