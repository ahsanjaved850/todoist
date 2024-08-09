import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Login from "./LoginPage/Login";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
];

const App: React.FC = () => {
  const appRouter = createBrowserRouter(routes);
  return <RouterProvider router={appRouter} />;
};

export default App;
