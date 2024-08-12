import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #808080;
`;

export const FeaturesWindow = styled.div`
  margin-top: 20px;
  width: 350px;
  height: 100vh;
  background-color: #fcfaf8;
  ul {
    width: 100%;
    font-size: 1.1rem;
    list-style: none;
    margin-top: 10px;
    padding-left: 0px;
  }
  li {
    padding: 0.7rem;
    &:hover {
      background-color: #f2efed;
    }
  }
`;
export const Name = styled.div`
  height: fit-content;
  text-decoration: underline;
  font-size: 18px;
  margin-top: 25px;
  cursor: pointer;
  span {
    margin-left: 6px;
    padding: 0.5rem;
    color: #e44332;
    display: flex;
    align-items: center;
    gap: 5px;
    &:hover {
      background-color: #f2efed;
    }
  }
  h4 {
    font-weight: 500;
    color: #202020;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  ul {
    display: none;
    font-weight: 400;
    margin: 0;
    width: fit-content;
  }
  li {
    margin-left: 35px;
    cursor: pointer;
    font-size: small;
    display: flex;
    flex-direction: row;
    gap: 4px;
    font-weight: 400px;
    margin-top: 2px;
    background-color: white;
    &:hover {
      text-decoration: underline;
    }
  }
  &:hover {
    ul {
      display: inline-block;
    }
  }
`;

export const AddTask = styled.li`
  font-size: medium;
  display: flex;
  color: #e44332;
  font-weight: 400;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  padding-left: 0px;
  gap: 3px;
  cursor: pointer;
`;
export const Today = styled.li`
  cursor: pointer;
  font-size: medium;
  display: flex;
  gap: 3px;
  &:hover {
    color: #333333;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding: 0.5rem;
  height: 21px;
  h3 {
    color: #666666;
  }
  &:hover {
    background-color: #f2efed;
  }
`;
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
`;
export const Tasks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  span {
    height: fit-content;
    color: lightgray;
    font-size: x-large;
    &:hover {
      color: darkgrey;
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
