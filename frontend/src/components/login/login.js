import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./../../reducers/login";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import Logo from "./../../components/logo.png";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [state1, setState1] = useState(false);
  const dispatch = useDispatch();
  const signIn = () => {
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        setState1(false)
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("role_id", result.data.role_id);
        localStorage.setItem("user_id", result.data.user_id);
        console.log(result.data.user_id);
        dispatch(setToken(result.data.token));
        history.push("/");
      })
      .catch((err) => {
        setState1(true)
        throw err;
      });
  };
  return (
    <div className="login">
      <img src={Logo} />
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
      <button onClick={signIn}>Login</button>
      {state1 ? <div style={{margin:"20px auto",color:"red",width:"300px",textAlign:"center",fontSize:"22px"}}>email or password not correct</div> : ""}

      <p>
        {" "}
        Do not have an account ?
        <span>
          <Link className="render" to="/register">
            {" "}
            Sign Up
          </Link>
        </span>
      </p>{" "}
      <p>
          Join as a{" "}
          <span>
            <Link className="render" to="/doctorInfo">
              Doctor
            </Link>
          </span>
        </p>
    </div>

  );
};

export default Login;
