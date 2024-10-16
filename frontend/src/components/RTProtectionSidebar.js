import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WarningIcon from '@mui/icons-material/Warning';
import SecurityIcon from '@mui/icons-material/Security';

const RTProtectionSidebar = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/rt-protection/dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/rt-protection/threats">
          <ListItemIcon><WarningIcon /></ListItemIcon>
          <ListItemText primary="Threats" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/rt-protection/protection">
          <ListItemIcon><SecurityIcon /></ListItemIcon>
          <ListItemText primary="Protection" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default RTProtectionSidebar;

