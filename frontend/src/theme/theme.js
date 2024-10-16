import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const getTheme = (mode) => {
  let theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: { main: '#1976d2' },
            secondary: { main: '#dc004e' },
            background: { default: '#f5f5f5', paper: '#ffffff' },
            text: { primary: '#333333', secondary: '#666666' },
            action: {
              active: '#1976d2',
              hover: 'rgba(25, 118, 210, 0.04)',
              selected: 'rgba(25, 118, 210, 0.08)',
            },
          }
        : {
            primary: { main: '#90caf9' },
            secondary: { main: '#f48fb1' },
            background: { default: '#303030', paper: '#424242' },
            text: { primary: '#ffffff', secondary: '#b0bec5' },
          }),
    },
    typography: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      h1: { fontWeight: 700, letterSpacing: '-0.01562em' },
      h2: { fontWeight: 700, letterSpacing: '-0.00833em' },
      h3: { fontWeight: 600, letterSpacing: '0em' },
      h4: { fontWeight: 600, letterSpacing: '0.00735em' },
      h5: { fontWeight: 500, letterSpacing: '0em' },
      h6: { fontWeight: 500, letterSpacing: '0.0075em' },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            padding: '6px 16px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: mode === 'light' 
              ? '0 4px 6px rgba(0, 0, 0, 0.1)' 
              : '0 4px 6px rgba(255, 255, 255, 0.1)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? '#ffffff' : 'rgba(48, 48, 48, 0.8)',
            color: mode === 'light' ? '#333333' : '#ffffff',
            boxShadow: mode === 'light' ? '0 1px 3px rgba(0,0,0,0.12)' : 'none',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: mode === 'light' ? '#1976d2' : '#ffffff',
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};

export default getTheme;
