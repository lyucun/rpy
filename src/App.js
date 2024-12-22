
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import React from 'react';
import routes from './BaseView/Router';
function AppLayout() {

  return (    
    <Outlet />
  );
}

const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: routes
  }
]);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
