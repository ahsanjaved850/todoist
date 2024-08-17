import React, { useRef, useState } from "react";
import { valideUserInfo } from "./validateUserInfo";
import { loginAuth, signupAuth } from "./userAuthentication";
import icon from "/todoist.svg";
import { loginPic } from "../../utils/constants";
import {
  ErrorMsg,
  FormDiv,
  FormWrapper,
  LoginContainer,
  LogoPic,
  LogoWrapper,
  StyledButton,
  StyledTextField,
  ToggleText,
} from "./login.style";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [signinFrom, setSigninForm] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  const userName = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const handleSignIn = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const refUserName = userName.current?.value || "";
    const refEmail = email.current?.value || "";
    const refPassword = password.current?.value || "";

    const message = valideUserInfo(refEmail, refPassword, refUserName);
    if (message) {
      setErrorMsg(message);
      return;
    }

    try {
      if (signinFrom) {
        loginAuth(refEmail, refPassword);
        navigate("/today");
      } else {
        await signupAuth(refUserName, refEmail, refPassword);
        navigate("/today");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const toggleForm = () => {
    setSigninForm(!signinFrom);
  };

  return (
    <LoginContainer>
      <FormWrapper>
        <LogoWrapper>
          <img src={icon} alt="icon" />
          <h1>todoist</h1>
        </LogoWrapper>
        <h2>{signinFrom ? "Log in" : "Sign up"}</h2>
        <FormDiv>
          {!signinFrom && (
            <StyledTextField
              inputRef={userName}
              type="text"
              placeholder="Username"
              label="Username"
              variant="outlined"
            />
          )}
          <StyledTextField
            inputRef={email}
            type="text"
            placeholder="Email"
            label="Email"
            variant="outlined"
          />
          <StyledTextField
            inputRef={password}
            type="password"
            placeholder="Password"
            label="Password"
            variant="outlined"
          />
          <StyledButton
            type="button"
            onClick={handleSignIn}
            variant="contained"
          >
            {signinFrom ? "Log In" : "Sign Up"}
          </StyledButton>
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <ToggleText>
            {signinFrom ? "Don't have an account?" : "Already have an account?"}{" "}
            <span onClick={toggleForm}>
              {signinFrom ? "Sign up" : "Sign in"}
            </span>
          </ToggleText>
        </FormDiv>
      </FormWrapper>
      <LogoPic>
        <img src={loginPic} alt="LoginPic" />
      </LogoPic>
    </LoginContainer>
  );
};

export default Login;
