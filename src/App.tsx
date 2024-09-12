import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@/Routes";

export const App: React.FC = () => {
  const appRouter = createBrowserRouter(routes);

  return <RouterProvider router={appRouter} />;
};
