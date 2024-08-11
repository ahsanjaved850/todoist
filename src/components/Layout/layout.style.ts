import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #808080;
`;

export const LeftWindow = styled.div`
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
  text-decoration: underline;
  padding: 1rem;
  font-weight: 600;
  font-size: 18px;
  color: #202020;
  padding-bottom: 0px;
  span {
    color: #e44332;
    display: flex;
    align-items: center;
    gap: 3px;
  }
  h4 {
    color: #202020;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  ul {
    display: none;
    font-weight: 400;
  }
  li {
    display: flex;
    flex-direction: row;
    gap: 4px;
    font-weight: 400px;
    margin-top: 2px;
    &:hover {
      text-decoration: underline;
    }
  }
  &:hover {
    ul {
      display: inline-block;
      margin: 0px;
    }
  }
`;

export const AddTask = styled.li`
  display: flex;
  color: #e44332;
  font-weight: 400;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  padding-left: 0px;
  gap: 3px;
  &:hover {
    font-weight: 600;
  }
`;
export const Today = styled.li`
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
export const ChildrenContainer = styled.div`
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
  ul {
    list-style: none;
    padding-left: 18px;
    padding-left: 0;
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
    li {
    }
  }

  span {
    margin-right: 3px;
    color: #e44332;
  }
`;
