import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './mainlayout/Root.jsx';
import Home from './pages/home/home.jsx';
import About from './pages/about/About.jsx';
import Services from './pages/services/Services.jsx';
import Login from './pages/login/Login.jsx';
import Details from './pages/details/Details.jsx';
import Register from './pages/login/register';
import Service from './pages/Service';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './privateRoute/PrivateRoute';
import ErrorPage from './ErrorPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      
      {
        path: "/",
        element:<Home></Home>,
        loader :()=> fetch("/create.json")
      },
      {
        path: "/about",
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: "/gallery",
        element: <PrivateRoute><Services></Services></PrivateRoute>
      },
      {
        path:"/login" ,
        element:<Login></Login>
      },
      {
        path:"/services" ,
        element:<Service></Service>
      },


      {
         path: "/eventDetails/:id",
         element:<PrivateRoute>
          <Details></Details>
          </PrivateRoute>,
          
         loader :()=> fetch("/create.json")
         
       
      },
      {
        path:"/register" ,
        element:<Register></Register>
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>  
    
  </React.StrictMode>,
)
