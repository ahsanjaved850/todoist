import React, { useEffect, useState } from "react";
import { TaskDetails, UpcomingTasks } from "./Upcoming.style";
import { FiCheckCircle, FiCircle } from "react-icons/fi";
import { deleteTask, fetchingAllTasks } from "@/components/AddTask";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { priorityColors } from "@/utils/constants";
import { LoadingState } from "@/components/LoadingState";
import { TasksDisplayWindow } from "@/components/Pages/Today";
import { Popup } from "@/components/AddTask";

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

export const Upcoming: React.FC<UpcomingProps> = ({
  refreshTask,
  handleRefreshTasks,
}) => {
  const [upcomingTasks, setUpcomingTasks] = useState<Task[] | null>(null);
  const totalTasks = upcomingTasks?.filter((task) => task.date !== "today");
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchingAllTasks().then((tasks) => {
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

  const handleDelete = async (taskName: string) => {
    try {
      const audio = new Audio("/completion_sound.mp3");
      audio.play();
      await deleteTask(taskName);

      setUpcomingTasks((prevTasks) =>
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
