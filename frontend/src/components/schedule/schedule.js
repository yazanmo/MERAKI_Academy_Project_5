import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";

const Schedule = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [btata, setBtata] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [sa, setSa] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctor/${id}`)
      .then((result) => {
        setResult(result.data);
      })
      .catch((err) => {});
  }, []);

  const info = (req, res) => {
    axios
      .post(
        `http://localhost:5000/schedule/${id}`,
        {
          time,
          date,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  };

  return (
    <div>
      {result &&
        result.map((element, index) => {
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
      <div>
        <label className="timetext">Choose Time: </label>
        <input
          className="time"
          type="time"
          name="time"
          onChange={(e) => {
            setTime(e.target.value);
          }}
        />
      </div>

      <div>
        <label className="datetext">Choose Date: </label>
        <input
          className="date"
          type="date"
          min="2021-06-12"
          max="2021-06-30"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <button onClick={info}>book</button>
    </div>
  );
};
export default Schedule;
