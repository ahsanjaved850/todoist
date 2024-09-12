import React, { useEffect, useState } from "react";
import {
  TaskInfo,
  Tasks,
  TasksDisplayWindow,
} from "@/components/Pages/Today/Today.style";
import { FiCheckCircle, FiCircle } from "react-icons/fi";
import { deleteTask, fetchingAllTasks } from "@/components/AddTask";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { priorityColors } from "@/utils/constants";
import { LoadingState } from "@/components/LoadingState";
import { Popup } from "@/components/AddTask";

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

export const Today: React.FC<TodayProps> = ({
  refreshTask,
  handleRefreshTasks,
}) => {
  const [todayTasks, setTodayTasks] = useState<Task[] | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const tasks = await fetchingAllTasks();
        const sortedTasks = tasks
          .filter((task) => task.date === "today")
          .sort((a, b) => parseInt(a.priority) - parseInt(b.priority));
        setTodayTasks(sortedTasks);
      } catch (error) {
        console.error("Failed to retrieve tasks:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchTasks();
        if (refreshTask) {
          handleRefreshTasks();
        }
      }
    });

    return () => unsubscribe();
  }, [refreshTask, handleRefreshTasks]);

  const handleDelete = async (taskName: string) => {
    try {
      const audio = new Audio("/completion_sound.mp3");
      audio.play();

      await deleteTask(taskName);
      setTodayTasks((prevTasks) =>
        prevTasks ? prevTasks.filter((task) => task.name !== taskName) : null
      );
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4500);
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  return (
    <div>
      <TasksDisplayWindow>
        <div>
          <h2>Today</h2>
          <h5>
            <span>
              <FiCheckCircle />
            </span>
            Total tasks: {todayTasks?.length || 0}
          </h5>
        </div>
        {todayTasks ? (
          todayTasks.map((task, index) => (
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
              <TaskInfo>
                <span>
                  <h3>{task.name}</h3>
                  <p>{task.description}</p>
                </span>
                <h5></h5>
              </TaskInfo>
            </Tasks>
          ))
        ) : (
          <LoadingState />
        )}
      </TasksDisplayWindow>
      {showPopup && (
        <Popup showPopup={showPopup}>
          <p>1 Task completed</p>
        </Popup>
      )}
    </div>
  );
};
