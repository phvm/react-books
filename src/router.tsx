import { createBrowserRouter } from 'react-router-dom';
import { RouterLinks } from './constants';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const Router = createBrowserRouter([
  {
    path: RouterLinks.home,
    element: <Home />,
  },
  {
    path: RouterLinks.dashboard,
    element: <Dashboard />,
  },
]);

export default Router;
