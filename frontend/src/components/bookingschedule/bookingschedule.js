import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import './bookingschedule.css'
import axios from "axios";

const Booking = () => {
  const token = localStorage.getItem("token");
  const [result, setResult] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:5000/schedule", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setResult(result.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  return (
    <div className="book-card">
      {result &&
        result.map((element, index) => {
          return (
            <div >
  <Card style={{ width: "20rem" ,height:"33rem"}}>
    <div className="parent-book">
    <div className="card-img-booka">
  <Card.Img className="card-img-book"  src={element.img} />
  </div>
  <div className="card-body">
  <Card.Body>
    <Card.Title>{element.firstName} {element.lastName}</Card.Title>
    <Card.Text>
              <p>age: {element.age}</p>
              <p>Booking time: {element.time}</p>
              <p>Booking date: {element.date}</p>
              <div>
        </div>
    </Card.Text>

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
export default Booking;
