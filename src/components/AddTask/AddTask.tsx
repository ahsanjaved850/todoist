import React from "react";
import {
  ButtonDiv,
  FormContainer,
  TaskContainer,
  TaskInfo,
  TaskWrapper,
  StyledSelect,
  StyledMenuItem,
  PriorityFlag,
} from "./addTask.style";
import { SelectChangeEvent } from "@mui/material";
import { FiFlag } from "react-icons/fi";
import { priorityColors } from "../../utils/constants";
import { taskUploading } from "./taskManaging";
import { useParams } from "react-router-dom";
import { projectTaskUploading } from "../Project/projectTaskManagement";

interface AddTaskProps {
  onClose: () => void;
  isprojectTaskVisible: boolean;
}

const AddTask: React.FC<AddTaskProps> = ({ onClose, isprojectTaskVisible }) => {
  const { projectName } = useParams();
  const [taskName, setTaskName] = React.useState<string>("");
  const [taskDes, setTaskDes] = React.useState<string>("");
  const [selectedDate, setSelectedDate] = React.useState<string>("Calendar");
  const [selectedPriority, setSelectedPriority] =
    React.useState<string>("Priority");

  const handleTaskNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const handleTaskDesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDes(e.target.value);
  };

  const handleDateChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedDate(event.target.value as string);
  };

  const handlePriorityChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedPriority(event.target.value as string);
  };

  const uploadTask = () => {
    if (!isprojectTaskVisible) {
      taskUploading(taskName, taskDes, selectedDate, selectedPriority);
    } else {
      projectTaskUploading(
        projectName,
        taskName,
        taskDes,
        selectedDate,
        selectedPriority
      );
    }
    onClose();
  };

  const isButtonDisabled =
    !taskName || selectedDate === "Calendar" || selectedPriority === "Priority";

  return (
    <TaskWrapper>
      <TaskContainer>
        <TaskInfo>
          <input
            value={taskName}
            onChange={handleTaskNameChange}
            className="title"
            type="text"
            placeholder="Task Name"
          />
          <input
            value={taskDes}
            onChange={handleTaskDesChange}
            className="description"
            type="text"
            placeholder="Description"
          />
          <FormContainer>
            <StyledSelect value={selectedDate} onChange={handleDateChange}>
              <StyledMenuItem value="Calendar" disabled>
                Calendar
              </StyledMenuItem>
              <StyledMenuItem value="today">Today</StyledMenuItem>
              <StyledMenuItem value="tomorrow">Tomorrow</StyledMenuItem>
              <StyledMenuItem value="next-week">Next Week</StyledMenuItem>
              <StyledMenuItem value="next-month">Next Month</StyledMenuItem>
            </StyledSelect>
            <StyledSelect
              value={selectedPriority}
              onChange={handlePriorityChange}
            >
              <StyledMenuItem value="Priority" disabled>
                Priority
              </StyledMenuItem>
              <StyledMenuItem value="1">
                <PriorityFlag color={priorityColors["1"]}>
                  <FiFlag />
                </PriorityFlag>
                Priority 1
              </StyledMenuItem>
              <StyledMenuItem value="2">
                <PriorityFlag color={priorityColors["2"]}>
                  <FiFlag />
                </PriorityFlag>
                Priority 2
              </StyledMenuItem>
              <StyledMenuItem value="3">
                <PriorityFlag color={priorityColors["3"]}>
                  <FiFlag />
                </PriorityFlag>
                Priority 3
              </StyledMenuItem>
              <StyledMenuItem value="4">
                <PriorityFlag color={priorityColors["4"]}>
                  <FiFlag />
                </PriorityFlag>
                Priority 4
              </StyledMenuItem>
            </StyledSelect>
          </FormContainer>
        </TaskInfo>
        <ButtonDiv>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="taskBtn"
            onClick={uploadTask}
            disabled={isButtonDisabled}
          >
            Add Task
          </button>
        </ButtonDiv>
      </TaskContainer>
    </TaskWrapper>
  );
};

export default AddTask;
