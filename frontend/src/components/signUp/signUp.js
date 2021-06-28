import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
  const [fistName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useState(false);

  const history = useHistory();
  const signUpButton = () => {
    axios
      .post("http://localhost:5000/register", {
        fistName,
        lastName,
        age,
        email,
        password,
      })
      .then((result) => {
        //history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        setState(true);
      });
  };
  return (
    <>
      <div className="signUp">
        <input
          type="text"
          placeholder=" First Name "
          onChange={(e) => {
            setFistName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder=" Last Name "
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder=" Age "
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        
        <input
          type="email"
          placeholder=" Email "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder=" Password "
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={signUpButton}>Sign Up</button>
      </div>
      {state == true ? (
        <div className="falseRegister">
          Error happened while register, please try again
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SignUp;
