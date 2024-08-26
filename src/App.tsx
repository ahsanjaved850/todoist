import React from "react";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/LoginPage/Login";
import Layout from "./components/Layout/Layout";
import Today from "./components/Today/Today";
import Upcoming from "./components/Upcoming/Upcoming";
import Project from "./components/Project/Project";

const App: React.FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/today",
      element: (
        <Layout>
          <Today />
        </Layout>
      ),
    },
    {
      path: "/upcoming",
      element: (
        <Layout>
          <Upcoming />
        </Layout>
      ),
    },
    {
      path: "/myprojects/:projectName",
      element: (
        <Layout>
          <Project />
        </Layout>
      ),
    },
  ];

  const appRouter = createBrowserRouter(routes);

  return <RouterProvider router={appRouter} />;
};

export default App;
