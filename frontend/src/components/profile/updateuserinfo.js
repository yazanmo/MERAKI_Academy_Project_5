import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./profile.css";
const UpdateUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("user_info"));
  const token = localStorage.getItem("token");

  const [firstName, setFirstName] = useState(userInfo.firstName);
  const [lastName, setLastName] = useState(userInfo.lastName);
  const [age, setAge] = useState(userInfo.age);
  const [img, setImg] = useState(userInfo.img);
  const [email, setEmail] = useState(userInfo.email);

  const history = useHistory();

  const updateProfile = () => {
    axios
      .put(
        "http://localhost:5000/profile",
        {
          firstName,
          lastName,
          age,
          email,
          img,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        history.push("/profile");
      })
      .catch((err) => {});
  };
  return (
    <div class="update-profile">
      <img className="profileImage" src={userInfo.img} />
      <div className="update-profile-row">
        <div className="update-profile-desc">
          
          
          <p>First Name:</p>
          <p>Last Name:</p>
          <p>Image:</p>
          <p>Age:</p>
        </div>
        <div className="update-profile-info">
          
          
          <input
            placeholder={userInfo.firstName}
            defaultValue={userInfo.firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            placeholder={userInfo.lastName}
            defaultValue={userInfo.lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />           
          <input
            placeholder={userInfo.img}
            defaultValue={userInfo.img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
            type="text"
          />
          <input
            placeholder={userInfo.age}
            defaultValue={userInfo.age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          </div>
          
        
      </div>
      <button
            onClick={() => {
              updateProfile();
            }}
          >
            update
          </button>
    </div>
  );
};

export default UpdateUserInfo;
