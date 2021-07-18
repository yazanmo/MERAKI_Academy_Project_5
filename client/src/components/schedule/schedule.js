import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./schedule.css";
import axios from "axios";

const Schedule = () => {
  const token = localStorage.getItem("token");
  const { id } = useParams();
  const [result, setResult] = useState([]);
  const [message, setMessage] = useState("");
  const [btata, setBtata] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [sa, setSa] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_SERVER}/doctor/${id}`)
      .then((result) => {
        setResult(result.data);
      })
      .catch((err) => {});
  }, []);

  const info = (req, res) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_SERVER}/schedule/${id}`,
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
        setMessage("Booking successfully");
      })
      .catch((err) => {
        setMessage("you must choose date and time !!");
      });
  };

  return (
    <div style={{ backgroundColor: "#f1f1f1", paddingBottom: "245px" }}>
      {result &&
        result.map((element, index) => {
          return (
            <div className="schedule-card">
              <Card
                style={{ width: "60rem", height: "300px", marginTop: "40px" }}
              >
                <div className="parennt-schedule">
                  <div>
                    <Card.Img
                      className="card-img-schedule"
                      variant="top"
                      src={element.img}
                      style={{ height: "300px", width: "270px" }}
                    />
                  </div>
                  <div className="card-body">
                    <Card.Body>
                      <Card.Title>
                        {" "}
                        <h2>
                          {element.firstName} {element.lastName}
                        </h2>
                      </Card.Title>
                      <Card.Text>
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
                      <Button variant="outline-secondary" onClick={info}>
                        Book
                      </Button>
                      <p className="book-done">{message}</p>
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
