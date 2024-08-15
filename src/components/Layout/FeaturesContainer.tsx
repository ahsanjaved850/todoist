import React from "react";
import { AddTask, FeaturesWindow, Name, Project, Today } from "./layout.style";
import { FiCalendar, FiLogOut, FiPlus, FiUser } from "react-icons/fi";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

interface FeaturesContainerProps {
  onAddTaskClick: () => void;
}

const FeaturesContainer: React.FC<FeaturesContainerProps> = ({
  onAddTaskClick,
}) => {
  const navigate = useNavigate();
  const handleSignOut = (): void => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <FeaturesWindow>
      <Name>
        <span>
          <FiUser />
          <h4>Ahsan</h4>
        </span>
        <ul>
          <li onClick={handleSignOut}>
            <FiLogOut /> Logout
          </li>
        </ul>
      </Name>
      <ul>
        <AddTask onClick={onAddTaskClick}>
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
        <FiPlus />
      </Project>
    </FeaturesWindow>
  );
};

export default FeaturesContainer;
