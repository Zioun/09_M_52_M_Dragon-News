import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Details from '../Pages/Home/Details';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch("/news.json")
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/news/:id",
          element: <PrivateRoute><Details /></PrivateRoute>,
        },
      ],
    },
  ]);

export default Router;