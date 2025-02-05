import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Flowz from './Components/Flowz.jsx'

// Define the router
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  { 
    path: "/flowz", 
    element: <Flowz /> 
  },
])

// Render the app with RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
