import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InventoryIcon from '@mui/icons-material/Inventory';
import RecommendIcon from '@mui/icons-material/Recommend';

const AttackSurfaceSidebar = () => {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/attack-surface/inventory">
          <ListItemIcon><InventoryIcon /></ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/attack-surface/recommendations">
          <ListItemIcon><RecommendIcon /></ListItemIcon>
          <ListItemText primary="Recommendations" />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default AttackSurfaceSidebar;

