import React, { useRef, useState } from "react";
import { valideUserInfo } from "./validateUserInfo";
import { loginAuth, signupAuth } from "./userAuthentication";

const Login: React.FC = () => {
  const [signinFrom, setSigninForm] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const userName = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const refUserName = userName.current?.value || "";
    const refEmail = email.current?.value || "";
    const refPassword = password.current?.value || "";

    const message = valideUserInfo(refEmail, refPassword, refUserName);
    if (message) {
      setErrorMsg(message);
      return errorMsg;
    }

    if (signinFrom) {
      const signIn = loginAuth(refEmail, refPassword);
      if (signIn) setErrorMsg(signIn);
      return errorMsg;
    } else {
      const signUp = signupAuth(refUserName, refEmail, refPassword);
      if (signUp) setErrorMsg(signUp);
      return errorMsg;
    }
  };

  const toggleForm = () => {
    setSigninForm(!signinFrom);
  };

  return (
    <div>
      <h1>Log in</h1>
      <div>
        <form>
          {!signinFrom && (
            <input ref={userName} type="text" placeholder="Username"></input>
          )}
          <input ref={email} type="text" placeholder="Email"></input>
          <input ref={password} type="password" placeholder="Password"></input>
          <button onClick={handleSignIn}>
            {signinFrom ? "Sign In" : "Sign Up"}
          </button>
          <p>{errorMsg}</p>
          <p>
            {signinFrom ? "Dont have an account?" : "Already have an account?"}{" "}
            <span onClick={toggleForm}>
              {" "}
              {signinFrom ? "Sign up" : "Sign in"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
