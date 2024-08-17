import React from "react";
import { Tasks } from "../components/Today/today.style";
import { FiCheckCircle, FiCircle } from "react-icons/fi";
import { priorityColors } from "./constants";

const ShimmerUI: React.FC = () => {
  return (
    <Tasks color={priorityColors["5"]}>
      <span>
        <FiCircle className="fi-circle" />
        <FiCheckCircle className="fi-check-circle" />
      </span>
      <div>
        <h3>Task Name.......</h3>
        <p>Task Description.........</p>
      </div>
    </Tasks>
  );
};

export default ShimmerUI;
