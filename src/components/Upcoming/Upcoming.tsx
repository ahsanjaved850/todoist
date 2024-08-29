import React, { useEffect, useState } from "react";
import { TaskDetails, UpcomingTasks } from "./upcoming.style";
import { FiCheckCircle, FiCircle } from "react-icons/fi";
import { deleteTask, retrieveAllTasks } from "../AddTask/taskManaging";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { priorityColors } from "../../utils/constants";
import ShimmerUI from "../../utils/ShimmerUI";
import { TasksDisplayWindow } from "../Today/today.style";

interface Task {
  name: string;
  description: string;
  date: string;
  priority: string;
}

interface UpcomingProps {
  refreshTask: boolean;
  handleRefreshTasks: () => void;
}

const Upcoming: React.FC<UpcomingProps> = ({
  refreshTask,
  handleRefreshTasks,
}) => {
  const [upcomingTasks, setUpcomingTasks] = useState<Task[] | null>(null);
  const totalTasks = upcomingTasks?.filter((task) => task.date !== "today");

  const handleDelete = async (taskName: string) => {
    try {
      await deleteTask(taskName);
      // Update UI by removing the deleted task from state
      setUpcomingTasks((prevTasks: Task[] | null) =>
        prevTasks ? prevTasks.filter((task) => task.name !== taskName) : null
      );
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        retrieveAllTasks().then((tasks) => {
          const sortedTasks = tasks
            .filter((task) => task.date !== "today")
            .sort((a, b) => parseInt(a.priority) - parseInt(b.priority));
          setUpcomingTasks(sortedTasks);
        });
        if (refreshTask) {
          handleRefreshTasks();
        }
      }
    });
    return () => unsubscribe();
  }, [refreshTask, handleRefreshTasks]);

  return (
    <div>
      <TasksDisplayWindow>
        <div>
          <h2>Upcoming</h2>
          <h5>
            <span>
              <FiCheckCircle />
            </span>
            Total tasks: {totalTasks?.length || 0}
          </h5>
        </div>
        {upcomingTasks ? (
          upcomingTasks
            .filter((task) => task.date !== "today")
            .map((task, index) => (
              <UpcomingTasks
                color={priorityColors[task.priority as "1" | "2" | "3" | "4"]}
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
              </UpcomingTasks>
            ))
        ) : (
          <ShimmerUI></ShimmerUI>
        )}
      </TasksDisplayWindow>
    </div>
  );
};

export default Upcoming;
