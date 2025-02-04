import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage.jsx'
// import CategoryPage from './pages/CategoryPage.jsx'
import BreakfastPage from './pages/BreakfastPage.jsx'
import ChickenPage from './pages/ChickenPage.jsx'
import BeefPage from './pages/BeefPage.jsx'
import DessertPage from './pages/DessertPage.jsx'
import RandomPage from './pages/RandomPage.jsx'
import SearchPage from './pages/SearchPage.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error, page not found</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/breakfast',
        element: <BreakfastPage />
      },
      {
        path: '/chicken',
        element: <ChickenPage />,
      },
      {
        path: '/beef',
        element: <BeefPage />
      },
      {
        path: '/dessert',
        element: <DessertPage />
      },
      {
        path: '/random',
        element: <RandomPage />
      },
      {
        path: '/search',
        element: <SearchPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
