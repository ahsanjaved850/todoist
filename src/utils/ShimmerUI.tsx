import React from "react";
import { Tasks } from "../components/Today/today.style";
import { priorityColors } from "./constants";
import { ShimmerContainer } from "./ShimmerUI.style";
import { FiCircle } from "react-icons/fi";

const ShimmerUI: React.FC = () => {
  return (
    <ShimmerContainer>
      <Tasks color={priorityColors["5"]}>
        <span>
          <FiCircle></FiCircle>
        </span>
        <div>
          <h3>Task Name.......</h3>
          <p>Task Description.........</p>
        </div>
      </Tasks>
      <Tasks color={priorityColors["5"]}>
        <span>
          <FiCircle></FiCircle>
        </span>
        <div>
          <h3>Task Name.......</h3>
          <p>Task Description.........</p>
        </div>
      </Tasks>
      <Tasks color={priorityColors["5"]}>
        <span>
          <FiCircle></FiCircle>
        </span>
        <div>
          <h3>Task Name.......</h3>
          <p>Task Description.........</p>
        </div>
      </Tasks>
      <Tasks color={priorityColors["5"]}>
        <span>
          <FiCircle></FiCircle>
        </span>
        <div>
          <h3>Task Name.......</h3>
          <p>Task Description.........</p>
        </div>
      </Tasks>
    </ShimmerContainer>
  );
};

export default ShimmerUI;
