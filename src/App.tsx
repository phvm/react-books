import { RouterProvider } from 'react-router-dom';
import Router from './router';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import { navbarLinks } from './constants.ts';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Navbar pages={navbarLinks}></Navbar>
        <RouterProvider router={Router}></RouterProvider>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
