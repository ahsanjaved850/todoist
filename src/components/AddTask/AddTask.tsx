import React, { useState } from "react";
import {
  ButtonDiv,
  FormContainer,
  TaskContainer,
  TaskInfo,
  TaskWrapper,
  StyledSelect,
  StyledMenuItem,
  PriorityFlag,
  Popup,
} from "@/components/AddTask";
import { CircularProgress, SelectChangeEvent } from "@mui/material";
import { FiFlag } from "react-icons/fi";
import { priorityColors } from "@/utils/constants";
import { taskUploading } from "@/components/AddTask";
import { useParams } from "react-router-dom";
import { projectTaskUploading } from "@/components/Pages/Project";

interface AddTaskProps {
  onClose: () => void;
  isprojectTaskVisible: boolean;
}

export const AddTask: React.FC<AddTaskProps> = ({
  onClose,
  isprojectTaskVisible,
}) => {
  const { projectName } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [taskName, setTaskName] = React.useState<string>("");
  const [taskDes, setTaskDes] = React.useState<string>("");
  const [selectedDate, setSelectedDate] = React.useState<string>("soon");
  const [selectedPriority, setSelectedPriority] = React.useState<string>("5");
  const [showPopup, setShowPopup] = useState<boolean>(false);

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
      setLoading(true);
    } else {
      projectTaskUploading(
        projectName,
        taskName,
        taskDes,
        selectedDate,
        selectedPriority
      );
      setLoading(true);
    }

    setTimeout(() => {
      setShowPopup(true);
      setLoading(false);

      setTimeout(() => {
        onClose();
        setShowPopup(false);
      }, 1500);
    }, 2000);
  };

  const isButtonDisabled = !taskName;

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
              <StyledMenuItem value="soon" disabled>
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
              <StyledMenuItem value="5">
                <PriorityFlag color={priorityColors["5"]} />
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
          <button disabled={loading} type="button" onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className="taskBtn"
            onClick={uploadTask}
            disabled={isButtonDisabled || loading}
          >
            {loading ? <CircularProgress size={12} /> : "Add Task"}
          </button>
        </ButtonDiv>
      </TaskContainer>
      {showPopup && (
        <Popup showPopup={showPopup}>
          <p>Task Added</p>
        </Popup>
      )}
    </TaskWrapper>
  );
};
