import React, { useEffect, useState } from "react";
import { AddTask, FeaturesWindow, Name, Project, Today } from "./layout.style";
import { FiCalendar, FiLogOut, FiPlus, FiUser } from "react-icons/fi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BsFillCalendarDateFill } from "react-icons/bs";

interface FeaturesContainerProps {
  onAddTaskClick: () => void;
}

const FeaturesContainer: React.FC<FeaturesContainerProps> = ({
  onAddTaskClick,
}) => {
  const [userName, setUserName] = useState<string | null>(null);
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
  const goToToday = () => {
    navigate("/today");
  };
  const goToUpcoming = () => {
    navigate("/upcoming");
  };
  return (
    <FeaturesWindow>
      <Name>
        <span>
          <FiUser />
          <h4>{userName}</h4>
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
        <h3>My Projects</h3>
        <FiPlus />
      </Project>
    </FeaturesWindow>
  );
};

export default FeaturesContainer;
