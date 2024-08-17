import React, { useEffect, useState } from "react";
import { Tasks, TasksDisplayWindow } from "./today.style";
import { FiCheckCircle, FiCircle } from "react-icons/fi";
import { retrieveAllTasks } from "../AddTask/taskManaging";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { priorityColors } from "../../utils/constants";
import ShimmerUI from "../../utils/ShimmerUI";

interface Task {
  name: string;
  description: string;
  date: string;
  priority: string;
}

interface TodayProps {
  refreshTask: boolean;
  handleRefreshTasks: () => void;
}

const Today: React.FC<TodayProps> = ({ refreshTask, handleRefreshTasks }) => {
  const [todayTasks, setTodayTasks] = useState<Task[] | null>(null);
  const totalTasks = todayTasks?.filter((task) => task.date === "today");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        retrieveAllTasks().then(setTodayTasks);
        if (refreshTask) {
          handleRefreshTasks();
        }
      }
    });
    return () => unsubscribe();
  }, [refreshTask, handleRefreshTasks]);

  return (
    <TasksDisplayWindow>
      <div>
        <h2>Today</h2>
        <h5>
          <span>
            <FiCheckCircle />
          </span>
          Total tasks: {totalTasks?.length || 0}
        </h5>
      </div>
      {todayTasks && todayTasks.length > 0 ? (
        todayTasks
          .filter((task) => task.date === "today")
          .map((task, index) => (
            <Tasks
              color={priorityColors[task.priority as "1" | "2" | "3" | "4"]}
              key={index}
            >
              <span>
                <FiCircle className="fi-circle" />
                <FiCheckCircle className="fi-check-circle" />
              </span>
              <div>
                <h3>{task.name}</h3>
                <p>{task.description}</p>
              </div>
            </Tasks>
          ))
      ) : (
        <ShimmerUI></ShimmerUI>
      )}
    </TasksDisplayWindow>
  );
};

export default Today;
