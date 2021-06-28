import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();
  const signUpButton = (e) => {
      e.preventDefault();
    axios
      .post("http://localhost:5000/register", {
        firstName,
        lastName,
        age,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        history.push("/login");
      })
      .catch((err) => {
        setShow(true);
        setMessage(err.response.data)
      });
  };
  return (
    <>
      <form onSubmit={signUpButton} className="signUp">
        <input
          type="text"
          placeholder=" First Name "
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder=" Last Name "
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="number"
          placeholder=" Age "
          required
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />

        <input
          type="email"
          placeholder=" Email "
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder=" Password "
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button >Sign Up</button>
        <din className="singUp" ><p style={{marginTop:"20px",fontStyle:"bold"}}>You already have an account ?<span><Link to="/login"> log in</Link></span></p> </din>

      </form>
      {show  ? (
        <p>{message}</p>
      ) : (
        ""
      )}
    </>
  );
};

export default SignUp;
