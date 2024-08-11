import React from "react";
import { AddTask, FeaturesWindow, Name, Project, Today } from "./layout.style";
import { FiCalendar, FiLogOut, FiPlus, FiUser } from "react-icons/fi";

const FeaturesContainer: React.FC = () => {
  return (
    <FeaturesWindow>
      <Name>
        <span>
          <FiUser />
          <h4>Ahsan</h4>
        </span>
        <ul>
          <li>
            <FiLogOut /> Logout
          </li>
        </ul>
      </Name>
      <ul>
        <AddTask>
          <FiPlus />
          <span>Add task</span>
        </AddTask>
        <Today>
          <FiCalendar />
          <span>Today</span>
        </Today>
      </ul>
      <Project>
        <h3>My Projects</h3>
        <FiPlus></FiPlus>
      </Project>
    </FeaturesWindow>
  );
};

export default FeaturesContainer;
