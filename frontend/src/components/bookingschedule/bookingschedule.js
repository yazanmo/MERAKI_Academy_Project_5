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
    <div>
      {result &&
        result.map((element, index) => {
          return (
            <div className="book-card">
  <Card style={{ width: '40rem' }}>
    <div className="parent-book">
    <div className="card-img-book">
  <Card.Img variant="top"  src={element.img} />
  </div>
  <div className="card-body">
  <Card.Body>
    <Card.Title>{element.firstName} {element.lastName}</Card.Title>
    <Card.Text>
      <br></br>
              <p>age: {element.age}</p>
              <p>Booking time: {element.time}</p>
              <p>Booking date: {element.date}</p>
              <br></br>
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
