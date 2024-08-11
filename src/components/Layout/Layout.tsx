import React from "react";
import {
  AddTask,
  ChildrenContainer,
  LayoutContainer,
  LeftWindow,
  Name,
  Project,
  Today,
} from "./layout.style";
import {
  FiCalendar,
  FiCheckCircle,
  FiCircle,
  FiLogIn,
  FiPlus,
  FiUser,
} from "react-icons/fi";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <LeftWindow>
        <Name>
          <span>
            <FiUser />
            <h4>Ahsan</h4>
          </span>
          <ul>
            <li>
              <FiLogIn /> Logout
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
      </LeftWindow>
      <ChildrenContainer>
        {children}
        <div>
          <h2>Today</h2>
          <h5>
            <span>
              <FiCheckCircle></FiCheckCircle>
            </span>
            Total tasks
          </h5>
        </div>
        <ul>
          <li>
            <h3>
              <span>
                <FiCircle></FiCircle>
              </span>
              Task name
            </h3>
            <p>Task Description</p>
          </li>
        </ul>
        <p>
          <span>
            <FiPlus></FiPlus>
          </span>
          Add task
        </p>
      </ChildrenContainer>
    </LayoutContainer>
  );
};

export default Layout;
