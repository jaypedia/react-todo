import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/layout';
import { Home, SignUp, Login, Error } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'todos/:todoId',
        element: <Home />,
      },
      {
        path: 'todos/:todoId/edit',
        element: <NewTodo />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'sign-up',
    element: <SignUp />,
  },
]);
