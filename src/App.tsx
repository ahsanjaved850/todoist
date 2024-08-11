import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/LoginPage/Login";
import Layout from "./components/Layout/Layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/layout",
    element: <Layout />,
  },
];

const App: React.FC = () => {
  const appRouter = createBrowserRouter(routes);
  return <RouterProvider router={appRouter} />;
};

export default App;
