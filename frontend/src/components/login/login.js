import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch} from "react-redux";
import { setToken } from "./../../reducers/login";
import { Link, useHistory } from "react-router-dom";
import "./login.css";
import Logo from "./../../components/logo.png";
import { GoogleLogin } from "react-google-login";

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
        setState1(false);
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("role_id", result.data.role_id);
        localStorage.setItem("user_id", result.data.user_id);
        dispatch(setToken(result.data.token));
        history.push("/");
      })
      .catch((err) => {
        setState1(true);
        throw err;
      });
  };

  const ResponseGoogle = (response) => {
    axios
      .post("http://localhost:5000/register", {
        firstName: response.profileObj.givenName,
        lastName: response.profileObj.familyName,
        email: response.profileObj.email,
        password: response.profileObj.googleId,
      })
      .then((result) => {
      
          console.log("elllllllllllllllllllllllllllllseeeeeeeeeeeeeeeeeeee",result);
          localStorage.setItem("token", result.data.token);
          localStorage.setItem("role_id", 1);
          dispatch(setToken(response.accessToken));
          history.push("/");
       
      })
      .catch((err) => {
        
        if (err.message==="Request failed with status code 400") {
          console.log("400 error",err.message);
          axios
          .post("http://localhost:5000/login", {
            email: response.profileObj.email,
            password: response.profileObj.googleId,
          })
          .then((result) => {
            
            localStorage.setItem("token",  result.data.token);
            localStorage.setItem("role_id", 1);
            localStorage.setItem("user_id", result.data.user_id);
            dispatch(setToken(response.accessToken));
            history.push("/");
          })
          .catch((err) => {
          
          });
        }
  
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
      {state1 ? (
        <div
          style={{
            margin: "20px auto",
            color: "red",
            width: "300px",
            textAlign: "center",
            fontSize: "22px",
          }}
        >
          email or password not correct
        </div>
      ) : (
        ""
      )}
      <div>
        <GoogleLogin
          clientId="788133413345-7e8m2mkms0qvf91jvr8m4j7p7sr8329h.apps.googleusercontent.com"
          onSuccess={ResponseGoogle}
          onFailure={ResponseGoogle}
        />
      </div>
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
