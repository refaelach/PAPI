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
    <AppBar 
      position="static" 
      elevation={0}
      sx={{
        width: showSidebar ? `calc(100% - ${sidebarOpen ? drawerWidth : theme => theme.spacing(7)}px)` : '100%',
        marginLeft: showSidebar ? (sidebarOpen ? `${drawerWidth}px` : theme => theme.spacing(7)) : 0,
        transition: theme => theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      }}
    >
      <StyledToolbar>
        <LogoContainer>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            PAPI
          </Typography>
        </LogoContainer>
        <MenuContainer>
          {['dashboard', 'attack-surface', 'risk-posture', 'rt-protection'].map((item) => (
            <StyledButton
              key={item}
              color="inherit"
              component={Link}
              to={`/${item}`}
              active={location.pathname === `/${item}` ? 'true' : 'false'}
            >
              {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </StyledButton>
          ))}
        </MenuContainer>
        <IconsContainer>
          <IconButton color="inherit" component={Link} to="/settings">
            <SettingsIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/integrations">
            <ExtensionIcon />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/profile">
            <AccountCircle />
          </IconButton>
        </IconsContainer>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
