import React, { useEffect, useState } from "react";
import {
  AddTaskDiv,
  ProjectWrapper,
} from "@/components/Pages/Project/Project.style";
import { FiCheckCircle, FiCircle, FiPlus } from "react-icons/fi";
import { LoadingState } from "@/components/LoadingState";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { priorityColors } from "@/utils/constants";
import { useParams } from "react-router-dom";
import {
  deleteProjectTask,
  fetchProjectTasks,
} from "@/components/Pages/Project/projectTaskManagement";
import { TaskDetails } from "@/components/Pages/Upcoming";
import { Tasks, TasksDisplayWindow } from "@/components/Pages/Today";
import { Popup } from "@/components/AddTask";

interface Task {
  name: string;
  description: string;
  date: string;
  priority: string;
}

interface ProjectProps {
  refreshTask: boolean;
  handleRefreshTasks: () => void;
  handleAddProjecTasks: () => void;
}

export const Project: React.FC<ProjectProps> = ({
  refreshTask,
  handleRefreshTasks,
  handleAddProjecTasks,
}) => {
  const { projectName } = useParams();
  const [projectTasks, setProjectTasks] = useState<Task[] | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchProjectTasks(projectName).then((tasks) => {
          const sortedTasks = tasks.sort(
            (a, b) => parseInt(a.priority) - parseInt(b.priority)
          );
          setProjectTasks(sortedTasks);
        });
        if (refreshTask) {
          handleRefreshTasks();
        }
      }
    });
    return () => unsubscribe();
  }, [refreshTask, handleRefreshTasks, projectName]);

  const handleDelete = async (taskName: string) => {
    try {
      if (projectName) {
        const audio = new Audio("/completion_sound.mp3");
        audio.play();
        await deleteProjectTask(projectName, taskName);
        setProjectTasks((prevTasks: Task[] | null) =>
          prevTasks ? prevTasks.filter((task) => task.name !== taskName) : null
        );
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 4500);
      }
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <ProjectWrapper>
      <p className="tag">
        My Projects <span> /</span>
      </p>
      <TasksDisplayWindow>
        <div>
          <h2>{projectName}</h2>
          <h5>
            <span>
              <FiCheckCircle />
            </span>
            Total tasks: {projectTasks?.length || 0}
          </h5>
        </div>
        {projectTasks ? (
          <>
            {projectTasks.map((task, index) => (
              <Tasks
                color={
                  priorityColors[task.priority as "1" | "2" | "3" | "4" | "5"]
                }
                key={index}
              >
                <span onClick={() => handleDelete(task.name)}>
                  <FiCircle className="fi-circle" />
                  <FiCheckCircle className="fi-check-circle" />
                </span>
                <TaskDetails>
                  <span>
                    <h3>{task.name}</h3>
                    <p>{task.description}</p>
                  </span>
                  <h5>{task.date}</h5>
                </TaskDetails>
              </Tasks>
            ))}
            <AddTaskDiv onClick={handleAddProjecTasks}>
              <span>
                <FiPlus />
              </span>
              Add task
            </AddTaskDiv>
          </>
        ) : (
          <LoadingState />
        )}
      </TasksDisplayWindow>
      {showPopup && (
        <Popup showPopup={showPopup}>
          <p>1 Task completed</p>
        </Popup>
      )}
    </ProjectWrapper>
  );
};
