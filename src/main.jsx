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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      
      {
        path: "/",
        element:<Home></Home>,
        loader :()=> fetch("/create.json")
      },
      {
        path: "/about",
        element:<About></About>,
      },
      {
        path: "/services",
        element:<Services></Services>
      },
      {
        path:"/login" ,
        element:<Login></Login>
      },
      {
         path: "/eventDetails/:id",
         element:<Details></Details>,
         loader :()=> fetch("/create.json")
        
       
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
