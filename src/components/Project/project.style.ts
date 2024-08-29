import styled, { keyframes } from "styled-components";
import { Input as MuiInput } from "@mui/material";

export const Tasks = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  padding: 10px;
  span {
    height: fit-content;
    color: ${(props) => props.color};
    font-size: x-large;
    &:hover {
      .fi-check-circle {
        display: inline-block;
      }
      .fi-circle {
        display: none;
      }
    }
  }
  h3 {
    font-weight: 400;
    color: black;
    font-size: large;
    margin: 0;
  }
  p {
    font-size: small;
    margin-top: 5px;
  }
  .fi-check-circle {
    display: none;
  }
`;

export const ProjectWrapper = styled.div`
  .tag {
    margin-left: 14px;
    font-size: 14px;
    font-weight: 600;
    width: fit-content;
    padding: 10px 6px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #f5f5f5;
      color: black;
    }
    span {
      background-color: white;
    }
  }
`;

export const ProjectFormDiv = styled.div`
  color: black;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
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

export const ProjectData = styled.div`
  display: flex;
  width: 400px;
  padding: 16px;
  flex-direction: column;
  justify-content: flex-start;
  background-color: white;
  height: fit-content;
  border-radius: 4px;
  animation: ${emergeAnimation} 0.3s ease-out;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.2);
  h3 {
    color: gray;
    font-weight: 500;
    margin-top: 0px;
    margin-bottom: 10px;
  }
`;

export const ProjectFormLayout = styled.form`
  h3 {
    margin-bottom: 6px;
    font-size: 16px;
    color: black;
  }
`;

export const StyledInput = styled(MuiInput)`
  width: 100%;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 6px;
`;

export const ProjectButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 15px;

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

  .proBtn {
    background-color: #e44332;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #c3392c;
    }

    &:disabled {
      background-color: #f0f0f0;
      color: lightgray;
      cursor: not-allowed;
    }
  }
`;

export const AddTaskDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    color: #e44332;
  }
`;
