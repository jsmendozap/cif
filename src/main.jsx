import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider }  from 'react-router-dom';
import Home from './routes/Root.jsx'
import Cif from './routes/Cif.jsx'
import Ica from './routes/Ica.jsx'
import './index.css'
import PageError from './components/PageError.jsx';
import App from './App.jsx';
import Private from './layout/Private.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Private><Home /></Private>,
    errorElement: <PageError />
  },
  {
    path: '/form',
    element: <Private><Cif /></Private>,
    errorElement: <PageError />
  },
  {
    path: '/register',
    element: <Private><Ica /></Private>,
    errorElement: <PageError />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
