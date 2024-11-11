import { createTheme } from '@mui/material';
const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#3f258a',
        },
        background: {
          default: '#ffffff',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#af93ff',
        },
        background: {
          default: '#181818',
        },
      },
    },
  },
});

export default theme;
