import React from "react";
import { LoginContainer } from "./login-styled";

const LoginComponent = () => {
  const register = () => {
    console.log("Registered");
  };
  return (
    <LoginContainer>
      <form>
        <input placeholder="Enter Full Name" type="text" />
        <input placeholder="profile pic (URL)" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="password" type="password" />
        <button className="login_btn">Login</button>
      </form>
      <div>
        <p className="login_not_registered">Not Registered? </p>
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </div>
    </LoginContainer>
  );
};

export default LoginComponent;
