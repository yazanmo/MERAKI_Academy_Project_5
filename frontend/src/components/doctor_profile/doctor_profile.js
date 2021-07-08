import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../reducers/doctorProfile";
import { useHistory } from "react-router-dom";
import DeleteUser from "./deleteUser";
import "./doctor_profile.css";
const DoctorProfile = () => {
  const history = useHistory();
  const [result, setResult] = useState("");

  let token = localStorage.getItem("token");

  const dispatch = useDispatch();
  localStorage.setItem("profile-data", JSON.stringify(result));

  useEffect(() => {
    axios
      .get("http://localhost:5000/doctor/details", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log(result.data);
        setResult(result.data[0]);

        dispatch(setData(result.data[0]));
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <>
      <div className="profile_page">
      <div className="profile-info">
        <img src={result.img} />
       
          
            <p>
              <span>FirstName :</span>
              {result.firstName}
            </p>

            <p>
              <span>LastName :</span>
              {result.lastName}
            </p>
          

          

          <p>
            <span>Age :</span>
            {result.age}
          </p>

          <p>
            <span>Price :</span>
            {result.price}
          </p>
          <p>
            <span>Email :</span>
            {result.email}
          </p>
          <p>
            <span>Description :</span>
            {result.description}
          </p>

          <p>
            <span>Qualifications :</span>
            {result.Qualifications}
          </p>

          <p>
            <span>PracticalExperiences :</span>
            {result.practicalExperiences}
          </p>
        </div>
        <div className="btnS">
        <button
          onClick={() => {
            history.push("/editProfile");
          }}
        >
          edit
        </button>
        <DeleteUser className="deleteBtn"/>
        </div>
      </div>
    </>
  );
};

export default DoctorProfile;
