import React from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Box, IconButton, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InventoryIcon from '@mui/icons-material/Inventory';
import RecommendIcon from '@mui/icons-material/Recommend';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BugReportIcon from '@mui/icons-material/BugReport';
import SettingsIcon from '@mui/icons-material/Settings';
import WarningIcon from '@mui/icons-material/Warning';
import SecurityIcon from '@mui/icons-material/Security';

const drawerWidth = 240;

const StyledDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const SidePanel = ({ open, toggleDrawer }) => {
  const location = useLocation();

  const getPanelTitle = () => {
    if (location.pathname.startsWith('/attack-surface')) {
      return 'Attack Surface';
    } else if (location.pathname.startsWith('/risk-posture')) {
      return 'Risk Posture';
    } else if (location.pathname.startsWith('/rt-protection')) {
      return 'RT Protection';
    }
    return 'Navigation';
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

  return (
    <StyledDrawer variant="permanent" open={open}>
      <DrawerHeader>
        {open && (
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, marginLeft: 2 }}>
            {getPanelTitle()}
          </Typography>
        )}
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.link}
            selected={location.pathname === item.link}
          >
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: 'white' }} />
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default SidePanel;
