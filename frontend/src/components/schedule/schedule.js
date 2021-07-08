import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './schedule.css'
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
            <div className="schedule-card">
  <Card style={{ width: '40rem' }}>
    <div className="asdsaasdasdasdasdasd">
    <div className="card-img">
  <Card.Img variant="top"  src={element.img} />
  </div>
  <div className="card-body">
  <Card.Body>
    <Card.Title>{element.firstName} {element.lastName}</Card.Title>
    <Card.Text>
      <br></br>
              <p> {element.price}</p>
              <br></br>
              <p> {element.description}</p>
              <br></br>
              <div>
              <br></br>
              <br></br>
              <div class="quesadilla">
        <label className="datetext">Choose Date: </label>
        <input
          className="date"
          type="date"
          min="2021-07-13"
          max="2021-08-30"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <br></br>
        <br></br>
      </div>
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
    </Card.Text>
    <br></br>
        <br></br>
    <Button variant="primary" onClick={info}>Book</Button>

  </Card.Body>
  </div>
  </div>
</Card>
             
              
             
            </div>
          );
        })}
      
    </div>
  );
};
export default Schedule;
