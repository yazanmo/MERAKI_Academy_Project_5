import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./bookingschedule.css";
import axios from "axios";

const Booking = () => {
  const token = localStorage.getItem("token");
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(`/schedule`, {
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
  }, [result]);

  return (
    <div className="background6">
      <div className="book-card">
        {result &&
          result.map((element, index) => {
            return (
              <div className="schedule-Card">
                <Card style={{ width: "20rem", height: "33rem" }}>
                  <div className="parent-book">
                    <div className="card-img-booka">
                      <Card.Img className="card-img-book" src={element.img} />
                    </div>
                    <div className="card-body">
                      <Card.Body>
                        <Card.Title>
                          {element.firstName} {element.lastName}
                        </Card.Title>
                        <Card.Text>
                          <p>age: {element.age}</p>
                          <p>Booking time: {element.time}</p>
                          <p>Booking date: {element.date}</p>
                          <div></div>
                        </Card.Text>

                        <img
                          style={{
                            height: "30px",
                            width: "30px",
                            cursor: "pointer",
                            marginLeft: "-7px",
                            marginTop: "-13px",
                          }}
                          src="https://img.icons8.com/color/48/000000/delete-sign--v1.png"
                          onClick={() => {
                            axios
                              .put(
                                `${process.env.REACT_APP_BACKEND_SERVER}/delete-scheduleDoctor`,
                                {
                                  doctorServes: element.doctorServes,
                                  schedule_id: element.schedule_id,
                                }
                              )
                              .then((result) => {})
                              .catch((err) => {});
                          }}
                        />
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Booking;
