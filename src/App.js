import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import React from 'react';
import routes from './BaseView/Router'; // 你的路由配置
import Header from './BaseView/Header';
import Footer from './BaseView/Footer';

function AppLayout() {
  return (
    <div>
      <Header /> 
      <Outlet />
      <Footer /> 
    </div>
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
