import styled from "styled-components";
import { TextField, Button } from "@mui/material";

// Container for the entire login form
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  height: 100vh;
  padding: 24px;
  gap: 3rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

// Form wrapper with custom styling for inputs and buttons
export const FormWrapper = styled.div`
  background: white;
  padding: 2rem;
  padding-top: 0px;
  width: 100%;
  max-width: 400px;

  h2 {
    font-size: 2.2rem;
  }
`;

// Wrapper for the logo and heading
export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 50px;

  img {
    width: 40px;
  }

  h1 {
    color: #e44332;
    margin-left: 0.6rem;
  }
`;

// Styled TextField from Material UI
export const StyledTextField = styled(TextField)`
  width: 100%;
  height: 3rem;
`;

// Styled Button from Material UI
export const StyledButton = styled(Button)`
  width: 100%;
  height: 3rem;
`;

// Toggle text and error messages
export const ToggleText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
  color: #333;

  span {
    color: #333;
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ErrorMsg = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-top: 1rem;
  text-align: center;
`;

export const LogoPic = styled.div`
  padding-left: 16px;
  margin-left: 32px;
  margin-top: 200px;

  img {
    width: 450px;
    height: 245px;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
