import styled from "styled-components";

export const TasksDisplayWindow = styled.div`
  width: 100%;
  margin-left: 300px;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 50px;
  h2 {
    font-weight: 600;
    color: black;
    font-size: xx-large;
    margin-bottom: 0;
  }
  h5 {
    font-size: 16px;
    font-weight: 400;
    span {
      color: #808080;
      margin-right: 3px;
    }
  }

  span {
    margin-right: 3px;
    color: #e44332;
  }
  @media (max-width: 1300px) {
    margin-left: 150px;
  }
  @media (max-width: 1000px) {
    margin-left: 100px;
  }
  @media (max-width: 900px) {
    margin-left: 50px;
  }
  @media (max-width: 450px) {
    margin-left: 20px;
  }
`;
export const Tasks = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  margin-top: 10px;
  margin-bottom: 10px;
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
    margin-bottom: 0px;
  }
  .fi-check-circle {
    display: none;
  }
`;

export const TaskInfo = styled.div`
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
    background-color: white;
    color: white;
    border-radius: 4px;
    height: 20px;
  }
  span {
    p {
      color: black;
    }
  }
`;
