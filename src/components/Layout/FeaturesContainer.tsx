import React, { useState, useEffect, MouseEvent } from "react";
import {
  AddTask,
  FeaturesWindow,
  Name,
  Project,
  ProjectNameList,
  Today,
} from "./layout.style";
import { FiCalendar, FiHash, FiLogOut, FiPlus, FiUser } from "react-icons/fi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BsFillCalendarDateFill } from "react-icons/bs";

interface FeaturesContainerProps {
  onAddTaskClick: () => void;
  onAddProject: () => void;
  projectNames: string[];
  onDeleteProject: (name: string) => void;
}

const FeaturesContainer: React.FC<FeaturesContainerProps> = ({
  onAddTaskClick,
  onAddProject,
  projectNames,
  onDeleteProject,
}) => {
  const [userName, setUserName] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName || "");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = (): void => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const goToToday = () => {
    navigate("/today");
  };

  const goToUpcoming = () => {
    navigate("/upcoming");
  };

  const goToProject = (e: MouseEvent<HTMLLIElement>) => {
    const projectName = e.currentTarget.textContent?.split("Delete");
    if (projectName) {
      navigate(`/myprojects/${projectName[0]}`);
    }
  };

  return (
    <FeaturesWindow>
      <Name onClick={toggleDropdown}>
        <span>
          <FiUser />
          <h4>{userName}</h4>
        </span>
        {isDropdownOpen && (
          <ul>
            <li onClick={handleSignOut}>
              <FiLogOut /> Logout
            </li>
          </ul>
        )}
      </Name>
      <ul>
        <AddTask onClick={onAddTaskClick}>
          <FiPlus />
          <span>Add task</span>
        </AddTask>
        <Today onClick={goToToday}>
          <BsFillCalendarDateFill />
          <span>Today</span>
        </Today>
        <Today onClick={goToUpcoming}>
          <FiCalendar />
          <span>Upcoming</span>
        </Today>
      </ul>
      <Project>
        <h4>My Projects</h4>
        <FiPlus onClick={onAddProject} className="plusLogo" />
      </Project>
      <ProjectNameList>
        <ul>
          {projectNames.map((name) => (
            <li key={name} onClick={goToProject}>
              <span>
                <FiHash />
                {name}
              </span>
              <button
                className="delete-button"
                onClick={() => onDeleteProject(name)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </ProjectNameList>
    </FeaturesWindow>
  );
};

export default FeaturesContainer;
