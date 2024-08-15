import React, { useState } from "react";
import { LayoutContainer, Overlay } from "./layout.style";
import FeaturesContainer from "./FeaturesContainer";
import TasksDisplayContainer from "./TasksDisplayContainer";
import AddTask from "../AddTask/AddTask";

const Layout: React.FC = () => {
  const [isAddTaskVisible, setAddTaskVisible] = useState(false);

  const handleAddTaskClick = () => {
    setAddTaskVisible(true);
  };

  const handleCloseAddTask = () => {
    setAddTaskVisible(false);
  };

  return (
    <LayoutContainer>
      <FeaturesContainer onAddTaskClick={handleAddTaskClick} />
      <TasksDisplayContainer />
      {isAddTaskVisible && (
        <Overlay>
          <AddTask onClose={handleCloseAddTask} />
        </Overlay>
      )}
    </LayoutContainer>
  );
};

export default Layout;
