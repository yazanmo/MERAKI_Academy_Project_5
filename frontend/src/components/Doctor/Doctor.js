import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Card, ListGroupItem, ListGroup } from "react-bootstrap";
import "./Doctor.css";

const Doctor = () => {
  const [Doctor, setDoctor] = useState();
  const [DoctorName, setDoctorName] = useState();
  const [num1, setnum1] = useState(0);
  const [num2, setnum2] = useState(99999999999999);
  const [filter, setfilter] = useState();
  const role_id = localStorage.getItem("role_id");
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctor`, { num1, num2 })
      .then((response) => {
        setDoctor(response.data);
      })
      .catch((err) => {});
  }, []);

  const callType_1 = () => {
    axios
      .post(`http://localhost:5000/doctors`, { num1, num2 })
      .then((response) => {
        setfilter(response.data);
        setDoctor([]);
      })
      .catch((err) => {});
  };

  const searchDoctor = (name) => {
    axios
      .post(`http://localhost:5000/search`, {
        DoctorName: name,
      })
      .then((res) => {
        setDoctorName(res.data);
      })
      .catch((err) => {});
  };
  const func = (id) => {
    return history.push(`/doctor/${id}`);
  };

  const getAcgRating = (id) => {
    axios
      .get(`http://localhost:5000/review/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };

  //admin can delete any doctor
  const deleteDoctor = (id) => {
    axios
      .put(`http://localhost:5000/admin/delete/${id}`)
      .then((result) => {
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="parent-doctor-page">
        <div class="background-oregon-grapes"></div>
        <div className="filter">
          <div className="row-a">
            <div className="btn-inp">
              <div className="filter-input">
                <input
                  className="input-filter"
                  type="number"
                  placeholder="MIN"
                  onChange={(e) => {
                    setnum1(e.target.value);
                  }}
                />
                <input
                  className="input-filter"
                  type="number"
                  placeholder="MAX"
                  onChange={(e) => {
                    setnum2(e.target.value);
                  }}
                />
              </div>
              <div>
                <button className="Filter-btn" onClick={callType_1}>
                  $
                </button>
              </div>
            </div>
            <div className="search">
              <input id="checkbox" className="checkInp" type="checkbox" />
              <label class="label1" for="checkbox">
                <div class="checkDiv"></div>
              </label>
              <input
                required
                id="text"
                class="textInp"
                onChange={(e) => {
                  if (e.target.value.length === 0) {
                    searchDoctor("''");
                  } else {
                    searchDoctor(e.target.value);
                  }
                }}
              />
            </div>
          </div>
          <div className="Doctor-search">
            {DoctorName &&
              DoctorName.map((element, index) => {
                return (
                  <div
                    className="search"
                    onClick={() => {
                      func(element.id);
                    }}
                    key={index}
                  >
                    <p
                      style={{ fontSize: "20px", fontWeight: "bold" }}
                      className="doctor-name"
                    >
                      {element.firstName} {element.lastName}
                      <img src={`${element.img}`} />
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="wrapper">
          {filter &&
            filter.map((elem, i) => {
              return (
                <>
                  <Card
                    onClick={() => {
                      func(role_id === 3 ? "" : elem.id);
                    }}
                    key={i}
                    style={{
                      width: "250px",
                      height: "400px",
                      cursor: "pointer",
                    }}
                  >
                    <Card.Img variant="top" src={`${elem.img}`} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#86cb6a",
                        }}
                      >
                        {elem.firstName} {elem.lastName}
                      </Card.Title>
                      <Card.Text>{elem.description}</Card.Text>
                      <Card.Text style={{ color: "#86cb6a" }}>
                        {elem.price + " $"}
                      </Card.Text>
                      <Card.Text>{elem.Qualifications}</Card.Text>
                    </Card.Body>
                    {role_id == 3 ? (
                      <button
                        onClick={() => {
                          deleteDoctor(elem.user_id);
                        }}
                      >
                        delete{" "}
                      </button>
                    ) : (
                      <></>
                    )}
                  </Card>
                </>
              );
            })}
        </div>
        <div className="wrapper bg-image hover-overlay shadow-1-strong rounded">
          {Doctor &&
            Doctor.map((elem, i) => {
              return (
                <>
                  <Card
                    onClick={() => {
                      func(role_id === 3 ? "" : elem.id);
                    }}
                    key={i}
                    style={{
                      width: "250px",
                      height: "400px",
                      cursor: "pointer",
                    }}
                  >
                    <Card.Img variant="top" src={`${elem.img}`} />
                    <Card.Body>
                      <Card.Title
                        style={{
                          color: "#67ac4b",
                        }}
                      >
                        {elem.firstName} {elem.lastName}
                      </Card.Title>
                      <Card.Text
                        style={{
                          color: "#67ac4b",
                        }}
                      >
                        {elem.price + " $"}
                      </Card.Text>
                      <Card.Text>{elem.description}</Card.Text>
                      <Card.Text>{elem.Qualifications}</Card.Text>
                    </Card.Body>
                    {role_id == 3 ? (
                      <button
                        onClick={() => {
                          deleteDoctor(elem.user_id);
                        }}
                      >
                        delete{" "}
                      </button>
                    ) : (
                      <></>
                    )}
                  </Card>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Doctor;
