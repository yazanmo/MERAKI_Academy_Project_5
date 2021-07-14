import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './schedule.css'
import axios from "axios";

const Schedule = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");


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
        setMessage("Booking successfully");
      })
      .catch((err) => {
      
        setMessage("you must choose date and time !!");
      });
  };

  return (
    <div>
      {result &&
        result.map((element, index) => {
          return (
            <div className="schedule-card">
  <Card style={{ width: '50rem' }}>
    <div className="parennt-schedule">
    <div>
  <Card.Img className="card-img-schedule" variant="top"  src={element.img} />
  </div>
  <div className="card-body">
  <Card.Body>
    <Card.Title> <h2>{element.firstName} {element.lastName}</h2></Card.Title>
    <Card.Text>
      <br></br>
              <p> {element.price}</p>
              
              <div>
              <p className="card-desc"> {element.description}</p>
              </div>
              
              <div>
              
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
    <Button variant="outline-secondary" onClick={info}>Book</Button>

  </Card.Body>
  </div>
  </div>
</Card>
<p className="book-done">{message}</p>
              
            
            </div>
          );
        })}
      
    </div>
  );
};
export default Schedule;
