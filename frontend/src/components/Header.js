import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useTheme } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExtensionIcon from '@mui/icons-material/Extension';
import { Link, useLocation } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const StyledToolbar = styled(Toolbar)(({ theme, showSidebar, sidebarOpen }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 3),
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(showSidebar && {
    width: `calc(100% - ${sidebarOpen ? 240 : theme.spacing(7)}px)`,
    marginLeft: sidebarOpen ? 240 : theme.spacing(7),
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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
  color: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  ...(active === 'true' && {
    backgroundColor: theme.palette.action.selected,
  }),
  textTransform: 'uppercase',
}));

const IconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  // ... other styles
}));

const Header = ({ showSidebar, sidebarOpen, toggleSidebar, toggleTheme, mode }) => {
  const location = useLocation();
  const theme = useTheme();

  return (
    <StyledAppBar 
      position="fixed" 
      elevation={0}
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }}
    >
      <StyledToolbar showSidebar={showSidebar} sidebarOpen={sidebarOpen}>
        <LogoContainer>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            PAPI
          </Typography>
        </LogoContainer>
        <MenuContainer>
          {['dashboard', 'attack-surface', 'risk-posture', 'rt-protection'].map((item) => (
            <StyledButton
              key={item}
              component={Link}
              to={`/${item}`}
              active={location.pathname === `/${item}` ? 'true' : 'false'}
            >
              {item.replace('-', ' ')}
            </StyledButton>
          ))}
        </MenuContainer>
        <IconsContainer>
          <IconButton onClick={toggleTheme} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
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
    </StyledAppBar>
  );
};

export default Header;
