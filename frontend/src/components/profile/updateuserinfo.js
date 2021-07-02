import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

const UpdateUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("user_info"));

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form>
        <input
          defaultValue={userInfo.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          defaultValue={userInfo.age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <input
          defaultValue={userInfo.firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          defaultValue={userInfo.lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          defaultValue={userInfo.img}
          onChange={(e) => {
            setImg(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default UpdateUserInfo;
