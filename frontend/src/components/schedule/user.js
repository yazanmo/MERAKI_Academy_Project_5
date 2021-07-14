import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./schedule.css";
import axios from "axios";

const UserSchedule = () => {
  const token = localStorage.getItem("token");
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userSchedule`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log(result.data);
        setResult(result.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <>
      {result &&
        result.map((elem, i) => {
          return (
            <div>
                <img src={elem.img}/>
              <p>{elem.firstName}{elem.lastName}</p>
              <p>{elem.date}</p>
              <p>{elem.time}</p>
            </div>
          );
        })}
    </>
  );
};
export default UserSchedule;
