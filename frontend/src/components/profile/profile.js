import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";
function Profile() {
  const token = localStorage.getItem("token");

  const [result, setResult] = useState([]);
  const [des, setDes] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/profile", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setResult(result.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  axios
    .get(
      "http://localhost:5000/stories",
      {},
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    )
    .then((result) => {})
    .catch((err) => {
      console.log(err);
    });

  return (
    <div>
      <div>
        <img src={result.img} />
      </div>
      <div>
        <p>{result.firstName}</p>
        <p>{result.lastName}</p>
        <p>{result.age}</p>
        <p>{result.email}</p>
      </div>

      <button>you story</button>
      <button>your food</button>
    </div>
  );
}

export default Profile;
