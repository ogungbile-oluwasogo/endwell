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
import Update from './pages/Update.jsx';
import Login from './pages/admin/Login.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Postupdate from './pages/admin/Postupdate.jsx';
import EditUpdate from './pages/admin/EditUpdate.jsx';

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
      },
      {
          path: '/latest-updates',
          element: <Update />
      },
      ]
    },
    {
      path: '/admin/login',
      element: <Login />
    },
    {
      path: '/admin/dashboard',
      element: <Dashboard />
    }
    ,
    {
      path: '/admin/new-update',
      element: <Postupdate />
    },
    {
      path: '/admin/edit-update/:id',
      element: <EditUpdate />
    }
])


const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
