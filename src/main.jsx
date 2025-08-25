import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RouteLayouts from './layouts/RouteLayouts.jsx';
import Home from './pages/Home.jsx';
import Investments from './pages/Investments.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
    {
      path: '/',
      element: <RouteLayouts />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ,
      {
          path: '/investments',
          element: <Investments />
      },
      {
          path: '/about-us',
          element: <AboutUs />
      },
      {
          path: '/contact-us',
          element: <Contact />
      }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
