import React, { Component } from 'react';
import {Register} from './pages/register/Register';
import { Login } from './pages/login/Login';
import { Dashboard } from './pages/dashboard/Dashboard'; 
import './assets/css/style.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() { 

  const router = createBrowserRouter([ 
    {
      path: "/register",
      element: <Register />
    }, 
    {
      path: "/login",
      element: <Login />
    }, 
    {
      path: "/dashboard",
      element: <Dashboard />
    }, 
  ]);

  return (
    <React.Fragment>
      <RouterProvider router={router}/>
    </React.Fragment>
  )
}

export default App;
