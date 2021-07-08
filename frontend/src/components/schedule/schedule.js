import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Schedule = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [sa, setSa] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/mydoctor", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log(result.data);
        setResult(result.data);
        if (sa) {
          setSa(false);
        } else {
          setSa(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {result.map((element, index) => {
        return (
          <div>
            <p> {element.img}</p>
            <p> {element.firstName}</p>
            <p> {element.lastName}</p>
            <p> {element.price}</p>
            <p> {element.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Schedule;
