import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "./../../reducers/login";
import { Link, useHistory } from "react-router-dom";
let token = localStorage.getItem("token");
const DoctorProfile = () => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/details", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        throw err;
      });
  },[]);

  return(<><div></div></>)
  
};

export default DoctorProfile;
