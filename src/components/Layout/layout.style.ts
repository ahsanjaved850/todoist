import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #808080;
`;

export const FeaturesWindow = styled.div`
  width: 300px;
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
  @media (max-width: 1000px) {
    width: fit-content;
  }
`;
export const Name = styled.div`
  position: relative;
  height: fit-content;
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
      text-decoration: underline black;
    }
  }

  h4 {
    font-weight: 500;
    color: #202020;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  ul {
    position: absolute;
    top: 100%;
    left: 35px;
    display: block;
    margin: 0;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    list-style: none;
    z-index: 10;
    border-radius: 4px;
    width: 100px;
  }

  li {
    cursor: pointer;
    padding: 0.5rem;
    font-size: small;
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 400;
    &:hover {
      background-color: #f2efed;
      text-decoration: underline;
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

  h4 {
    color: #666666;
    font-weight: 600;
  }
  &:hover {
    background-color: #f2efed;
  }
  .plusLogo {
    &:hover {
      color: #e44332;
    }
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

export const ProjectNameList = styled.ul`
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: larger;
    position: relative;
    padding: 8px;

    span {
      font-size: medium;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;
      gap: 3px;
    }

    p {
      margin: 0;
      align-items: center;
      font-weight: 600;
      cursor: pointer;
      position: relative;
    }

    .delete-button {
      display: none;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: grey;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 4px 8px;
      cursor: pointer;
      font-size: 12px;
      transition: opacity 0.3s ease;
      margin-right: 5px;
    }

    &:hover .delete-button {
      background-color: darkgrey;
      display: block;
    }
  }
`;
