import { createBrowserRouter } from 'react-router-dom';
import { RouterLinks } from './constants';
import Home from './pages/Home';

const Router = createBrowserRouter([
  {
    path: RouterLinks.home,
    element: <Home />,
  },
]);

export default Router;
