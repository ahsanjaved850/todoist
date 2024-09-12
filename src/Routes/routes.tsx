import { RouteObject } from "react-router-dom";
import { Login } from "@/components/Pages/Login";
import { Layout } from "@/components/Layout";
import { Today } from "@/components/Pages/Today";
import { Upcoming } from "@/components/Pages/Upcoming";
import { Project } from "@/components/Pages/Project";
import { PrivateRoute } from "@/Routes/privateRoute";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <PrivateRoute element={<Login />} redirectPath="/today" />,
  },
  {
    path: "/today",
    element: (
      <PrivateRoute
        element={
          <Layout>
            <Today refreshTask handleRefreshTasks={() => {}} />
          </Layout>
        }
      />
    ),
  },
  {
    path: "/upcoming",
    element: (
      <PrivateRoute
        element={
          <Layout>
            <Upcoming refreshTask handleRefreshTasks={() => {}} />
          </Layout>
        }
      />
    ),
  },
  {
    path: "/myprojects/:projectName",
    element: (
      <PrivateRoute
        element={
          <Layout>
            <Project
              refreshTask
              handleRefreshTasks={() => {}}
              handleAddProjecTasks={() => {}}
            />
          </Layout>
        }
      />
    ),
  },
];
