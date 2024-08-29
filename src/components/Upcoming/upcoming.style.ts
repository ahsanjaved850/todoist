import styled from "styled-components";

export const TaskDetails = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid lightgrey;
  h5 {
    font-size: 12px;
    font-weight: 600;
    flex-direction: flex-end;
    margin-top: 0%;
    margin-left: 300px;
    padding: 0.2rem;
    background-color: whitesmoke;
    color: darkgray;
    border-radius: 4px;
    height: 20px;
  }
  span {
    h3 {
    }
    p {
      color: black;
    }
  }
`;
export const UpcomingTasks = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  margin-top: 10px;
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
