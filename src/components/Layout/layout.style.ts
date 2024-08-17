import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #808080;
`;

export const FeaturesWindow = styled.div`
  width: 350px;
  height: 98vh;
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
  align-items: center;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: medium;
  display: flex;
  gap: 3px;
  color: #666666;
  margin-bottom: 0.5rem;
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

export const Overlay = styled.div`
  position: fixed;
  top: auto;
  left: 0;
  right: 0;
  bottom: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
