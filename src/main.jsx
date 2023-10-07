import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './mainlayout/Root.jsx';
import Home from './pages/home/home.jsx';
import About from './pages/about/About.jsx';
import Services from './pages/services/Services.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/about",
        element:<About></About>,
      },
      {
        path: "/services",
        element:<Services></Services>
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
