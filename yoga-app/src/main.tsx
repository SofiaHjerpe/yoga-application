import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { YogaContextProvider } from './context/YogaContextProvider.tsx';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <YogaContextProvider>
      <RouterProvider router={router} />
    </YogaContextProvider>
  </React.StrictMode>
);
