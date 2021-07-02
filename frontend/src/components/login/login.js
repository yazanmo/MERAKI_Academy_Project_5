import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./../../reducers/login";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const signIn = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("role_id", result.data.role_id);
        localStorage.setItem("user_id", result.data.user_id);
        console.log(result.data.user_id);
        dispatch(setToken(result.data.token));
        history.push("/");
      })
      .catch((err) => {
        throw err;
      });
  };
  return (
    <>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="Enter E-mail Here"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
        placeholder="Enter Password Here"
      />
      <button onClick={signIn}>Sign-In</button>
      <din className="singUp">
        <p style={{ marginTop: "20px", fontStyle: "bold" }}>
          {" "}
          Do not have an account ?
          <span>
            <Link to="/register"> Sign Up</Link>
          </span>
        </p>{" "}
      </din>
    </>
  );
};

export default Login;
