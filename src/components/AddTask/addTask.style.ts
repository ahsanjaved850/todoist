import { MenuItem, Select } from "@mui/material";
import styled, { keyframes } from "styled-components";

export const TaskWrapper = styled.div`
  display: flex;
  width: auto;
  justify-content: center;
  align-items: flex-start;
  padding: 32px;
  margin-top: 32px;
`;
const emergeAnimation = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
  `;
export const TaskContainer = styled.div`
  display: flex;
  width: 550px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  height: fit-content;
  border-radius: 4px;
  animation: ${emergeAnimation} 0.3s ease-out;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
`;
export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 20px;
  gap: 0.5rem;
  border-bottom: 1px solid lightgray;
  .title {
    border: none;
    line-height: 25px;
    font-size: 20px;
    font-weight: 500;
    &:focus {
      outline: none;
      border: none;
    }
  }
  .description {
    line-height: 1.65rem;
    border: none;
    &:focus {
      outline: none;
      border: none;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  justify-content: flex-end;

  button {
    font-weight: 600;
    font-size: 12px;
    padding: 8px 10px;
    margin-right: 10px;
    border-radius: 4px;
    color: gray;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }
  }
  .taskBtn {
    background-color: #e44332;
    color: white;
    &:hover {
      background-color: #c3392c;
    }
  }
`;

export const StyledSelect = styled(Select)`
  height: 30px;
  min-width: 60px;
  padding: 2px 6px;
  font-size: 0.5rem;
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  flex-direction: row;
  gap: 3px;
  padding: 4px 6px;
  font-size: 0.4rem;
`;

export const PriorityFlag = styled.span<{ color: string }>`
  color: ${(props) => props.color};
`;
