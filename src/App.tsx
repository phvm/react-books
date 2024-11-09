import { RouterProvider } from 'react-router-dom';
import Router from './router';
import Navbar from './components/Navbar';
import { RouterLinks } from './constants.ts';

const navbarLinks = [
  { title: 'Home', link: RouterLinks.home },
  { title: 'Dashboard', link: RouterLinks.dashboard },
];

function App() {
  return (
    <>
      <Navbar pages={navbarLinks} />
      <RouterProvider router={Router}></RouterProvider>
    </>
  );
}

export default App;
