import React from "react";
import { LayoutContainer } from "./layout.style";
import FeaturesContainer from "./FeaturesContainer";
import TasksDisplayContainer from "./TasksDisplayContainer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <FeaturesContainer />
      <TasksDisplayContainer child={children} />
    </LayoutContainer>
  );
};

export default Layout;
