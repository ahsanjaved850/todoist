import React from "react";
import { Tasks } from "@/components/Pages/Today/Today.style";
import { priorityColors } from "@/utils/constants";
import { FiCircle } from "react-icons/fi";
import { LoadingStateContainer } from "./Loading.style";

export const LoadingState: React.FC = () => {
  return (
    <LoadingStateContainer>
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
    </LoadingStateContainer>
  );
};
