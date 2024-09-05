import React, { ReactElement, useState, useEffect } from "react";
import { LayoutContainer, Overlay } from "./layout.style";
import FeaturesContainer from "./FeaturesContainer";
import AddTask from "../AddTask/AddTask";
import ProjectForm from "../Project/ProjectForm";
import { auth } from "../../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";

interface ChildProps {
  refreshTask: boolean;
  handleRefreshTasks: () => void;
  handleAddProjectTasks: () => void;
  handleAddProjecTasks: () => void;
}

interface LayoutProps {
  children: ReactElement<ChildProps>;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isAddTaskVisible, setAddTaskVisible] = useState<boolean>(false);
  const [refreshTask, setRefreshTask] = useState<boolean>(false);
  const [isAddProjectVisible, setAddProject] = useState<boolean>(false);
  const [projectNames, setProjectNames] = useState<string[]>([]);
  const [isprojectTaskVisible, setProjectTaskVisible] =
    useState<boolean>(false);

  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const storedProjectNames = localStorage.getItem(
          `projectNames_${user.uid}`
        );
        if (storedProjectNames) {
          setProjectNames(JSON.parse(storedProjectNames));
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const addProjectName = (name: string) => {
    const updatedProjectNames = [...projectNames, name];
    setProjectNames(updatedProjectNames);

    if (user) {
      localStorage.setItem(
        `projectNames_${user.uid}`,
        JSON.stringify(updatedProjectNames)
      );
    }
  };
  const deleteProjectName = (name: string) => {
    const updatedProjectNames = projectNames.filter(
      (projectName) => projectName !== name
    );
    setProjectNames(updatedProjectNames);
    if (user) {
      localStorage.setItem(
        `projectNames_${user.uid}`,
        JSON.stringify(updatedProjectNames)
      );
    }
  };

  const handleAddTaskClick = () => {
    setAddTaskVisible(true);
  };
  const handleAddProjecTasks = () => {
    setProjectTaskVisible(true);
    setRefreshTask(true);
  };
  const handleCloseAddTask = () => {
    setProjectTaskVisible(false);
    setRefreshTask(true);
    setAddTaskVisible(false);
  };

  const handleRefreshTasks = () => {
    setRefreshTask(false);
  };

  const handleAddProject = () => {
    setAddProject(true);
  };

  const handleCloseProject = () => {
    setAddProject(false);
  };

  return (
    <LayoutContainer>
      <FeaturesContainer
        onAddTaskClick={handleAddTaskClick}
        onAddProject={handleAddProject}
        projectNames={projectNames}
        onDeleteProject={deleteProjectName}
      />
      {React.isValidElement(children) &&
        React.cloneElement(children, {
          refreshTask,
          handleRefreshTasks,
          handleAddProjecTasks,
        })}
      {isAddTaskVisible && (
        <Overlay>
          <AddTask onClose={handleCloseAddTask} isprojectTaskVisible={false} />
        </Overlay>
      )}
      {isprojectTaskVisible && (
        <Overlay>
          <AddTask onClose={handleCloseAddTask} isprojectTaskVisible />
        </Overlay>
      )}
      {isAddProjectVisible && (
        <Overlay>
          <ProjectForm
            onClose={handleCloseProject}
            addProjectName={addProjectName}
          />
        </Overlay>
      )}
    </LayoutContainer>
  );
};

export default Layout;
