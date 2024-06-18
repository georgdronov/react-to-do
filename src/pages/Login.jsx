import React, { useContext } from "react";
import { MyInput } from "../components/UI/input/MyInput";
import { MyButton } from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import { Navigate } from "react-router-dom";

export const Login = (props) => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  if (isAuth) {
    return <Navigate to="/posts" />;
  }

  return (
    <div className="App">
      <h1>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter the login" />
        <MyInput type="password" placeholder="Enter the password" />
        <MyButton type="submit">Enter</MyButton>
      </form>
    </div>
  );
};
