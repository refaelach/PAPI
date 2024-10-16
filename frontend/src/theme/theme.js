import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 300 },
    h2: { fontWeight: 300 },
    h3: { fontWeight: 400 },
    h4: { fontWeight: 400 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 3,
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 3,
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;

