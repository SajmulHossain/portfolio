import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={Router}></RouterProvider>
    </HelmetProvider>
  </StrictMode>
);
