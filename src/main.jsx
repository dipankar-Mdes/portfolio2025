import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Flowz from './Components/Flowz.jsx'
import Artworks from './Components/Artworks.jsx'
import Abouteme from './Components/Abouteme.jsx'

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
  { 
    path: "/artworks", 
    element: <Artworks /> 
  },
  { 
    path: "/aboutme", 
    element: <Abouteme /> 
  },
])

// Render the app with RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
