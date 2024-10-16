import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Box, Typography, IconButton, Divider } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InventoryIcon from '@mui/icons-material/Inventory';
import RecommendIcon from '@mui/icons-material/Recommend';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BugReportIcon from '@mui/icons-material/BugReport';
import SettingsIcon from '@mui/icons-material/Settings';
import WarningIcon from '@mui/icons-material/Warning';
import SecurityIcon from '@mui/icons-material/Security';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const collapsedDrawerWidth = 60;

const StyledDrawer = styled(Drawer)(({ theme, open }) => ({
  width: open ? drawerWidth : collapsedDrawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: open ? drawerWidth : collapsedDrawerWidth,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    borderRight: `1px solid ${theme.palette.divider}`,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(0.5, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.08),
  },
  ...(active === 'true' && {
    backgroundColor: alpha(theme.palette.primary.main, 0.12),
    '&:hover': {
      backgroundColor: alpha(theme.palette.primary.main, 0.16),
    },
  }),
  '& .MuiListItemIcon-root': {
    color: active === 'true' ? theme.palette.primary.main : theme.palette.text.secondary,
    minWidth: 40,
  },
  '& .MuiListItemText-primary': {
    fontWeight: active === 'true' ? 600 : 400,
    color: active === 'true' ? theme.palette.primary.main : theme.palette.text.primary,
  },
}));

const SidePanel = ({ open, toggleDrawer }) => {
  const location = useLocation();

  console.log('SidePanel rendered. Open state:', open);

  const handleToggle = () => {
    console.log('Toggle function called. Current open state:', open);
    toggleDrawer();
  };

  const handleItemClick = (event) => {
    if (!open) {
      event.preventDefault();
      toggleDrawer();
    }
  };

  const getMenuItems = () => {
    if (location.pathname.startsWith('/attack-surface')) {
      return [
        { text: 'Inventory', icon: <InventoryIcon />, link: '/attack-surface/inventory' },
        { text: 'Recommendations', icon: <RecommendIcon />, link: '/attack-surface/recommendations' },
      ];
    } else if (location.pathname.startsWith('/risk-posture')) {
      return [
        { text: 'Risk Dashboard', icon: <DashboardIcon />, link: '/risk-posture/dashboard' },
        { text: 'Vulnerabilities', icon: <BugReportIcon />, link: '/risk-posture/vulnerabilities' },
        { text: 'Misconfigurations', icon: <SettingsIcon />, link: '/risk-posture/misconfigurations' },
      ];
    } else if (location.pathname.startsWith('/rt-protection')) {
      return [
        { text: 'RT Dashboard', icon: <DashboardIcon />, link: '/rt-protection/dashboard' },
        { text: 'Threats', icon: <WarningIcon />, link: '/rt-protection/threats' },
        { text: 'Protection', icon: <SecurityIcon />, link: '/rt-protection/protection' },
      ];
    }
    return [];
  };

  const menuItems = getMenuItems();

  if (menuItems.length === 0) {
    return null;
  }

  return (
    <StyledDrawer 
      variant="permanent" 
      anchor="left" 
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          zIndex: (theme) => theme.zIndex.drawer + 2,
        },
      }}
    >
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        position: 'relative',
        minHeight: 64,
      }}>
        {open && (
          <Typography variant="h6" color="textSecondary" noWrap>
            {location.pathname.split('/')[1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
          </Typography>
        )}
        <IconButton onClick={handleToggle}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.text}>
            <StyledListItem
              button
              component={Link}
              to={item.link}
              active={location.pathname === item.link ? 'true' : 'false'}
              onClick={handleItemClick}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </StyledListItem>
            {index < menuItems.length - 1 && <Divider variant="middle" />}
          </React.Fragment>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default SidePanel;
