import React, { ReactElement, useState } from "react";
import { LayoutContainer, Overlay } from "./layout.style";
import FeaturesContainer from "./FeaturesContainer";
import AddTask from "../AddTask/AddTask";

interface ChildProps {
  refreshTask: boolean;
  handleRefreshTasks: () => void;
}

interface LayoutProps {
  children: ReactElement<ChildProps>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAddTaskVisible, setAddTaskVisible] = useState<boolean>(false);
  const [refreshTask, setRefreshTask] = useState<boolean>(false);

  const handleAddTaskClick = () => {
    setAddTaskVisible(true);
  };

  const handleCloseAddTask = () => {
    setAddTaskVisible(false);
    setRefreshTask(true);
  };

  const handleRefreshTasks = () => {
    setRefreshTask(false);
  };

  return (
    <LayoutContainer>
      <FeaturesContainer onAddTaskClick={handleAddTaskClick} />
      {React.isValidElement(children) &&
        React.cloneElement(children, { refreshTask, handleRefreshTasks })}
      {isAddTaskVisible && (
        <Overlay>
          <AddTask onClose={handleCloseAddTask} />
        </Overlay>
      )}
    </LayoutContainer>
  );
};

export default Layout;
