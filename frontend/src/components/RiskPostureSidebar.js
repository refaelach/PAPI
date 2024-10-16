import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BugReportIcon from '@mui/icons-material/BugReport';
import SettingsIcon from '@mui/icons-material/Settings';

const RiskPostureSidebar = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/risk-posture/dashboard">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/risk-posture/vulnerabilities">
          <ListItemIcon><BugReportIcon /></ListItemIcon>
          <ListItemText primary="Vulnerabilities" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/risk-posture/misconfigurations">
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Misconfigurations" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default RiskPostureSidebar;
