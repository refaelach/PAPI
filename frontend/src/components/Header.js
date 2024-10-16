import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExtensionIcon from '@mui/icons-material/Extension';
import { Link, useLocation } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 3),
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(2),
}));

const MenuContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
}));

const StyledButton = styled(Button)(({ theme, active }) => ({
  margin: theme.spacing(0, 1),
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  ...(active === 'true' && {
    backgroundColor: theme.palette.action.selected,
  }),
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const Header = ({ showSidebar, sidebarOpen, drawerWidth }) => {
  const location = useLocation();

  return (
    <header style={{backgroundColor: '#f0f0f0', padding: '1rem'}}>
      <h1>Welcome to PAPI</h1>
      <nav>
        <ul style={{listStyle: 'none', padding: 0}}>
          <li style={{display: 'inline', marginRight: '1rem'}}><a href="/">Home</a></li>
          <li style={{display: 'inline', marginRight: '1rem'}}><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
