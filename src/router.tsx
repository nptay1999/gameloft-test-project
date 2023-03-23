import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Layout from './components/layouts/Layout';
import ErrorPage from './error-page';
import { ScrollProvider } from './hooks/useScrollContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <ScrollProvider>
            <App />
          </ScrollProvider>
        ),
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
