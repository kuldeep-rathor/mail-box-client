import React from "react";
import "./css/login.css";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { signin } from "./features/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          signin({
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          })
        );
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="loginWrapper">
      <div className="login">
        <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" />
        <button className="gmail_login" onClick={login}>
          {" "}
          Login With Gmail
        </button>
      </div>
    </div>
  );
};

export default Login;
