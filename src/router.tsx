import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './components/layouts/Layout';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
