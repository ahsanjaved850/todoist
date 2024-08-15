import React from "react";
import { Tasks, TasksDisplayWindow } from "./layout.style";
import { FiCheckCircle, FiCircle, FiPlus } from "react-icons/fi";

const TasksDisplayContainer: React.FC = () => {
  return (
    <TasksDisplayWindow>
      <div>
        <h2>Today</h2>
        <h5>
          <span>
            <FiCheckCircle />
          </span>
          Total tasks
        </h5>
      </div>
      <Tasks>
        <span>
          <FiCircle className="fi-circle" />
          <FiCheckCircle className="fi-check-circle" />
        </span>
        <div>
          <h3>Task name</h3>
          <p>Task Description</p>
        </div>
      </Tasks>
      <p>
        <span>
          <FiPlus />
        </span>
        Add task
      </p>
    </TasksDisplayWindow>
  );
};

export default TasksDisplayContainer;
