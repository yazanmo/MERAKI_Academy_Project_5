import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Conversation from "./../conversation/conversation";
import "./mydoctor.css";
const MyDoctor = ({
  setSender,
  setReceiver,
  setFirstName,
  setLastName,
  setImg,
}) => {
  let token = localStorage.getItem("token");

  const [result, setResult] = useState([]);
  const [sa, setSa] = useState(false);

  const history = useHistory();
  const func = (id) => {
    return history.push(`/schedule/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/mydoctor", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
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
    <div className="my-doc-card-p">
      {result.map((element, index) => {
        console.log("element", element);
        return (
          <Card style={{ width: "18rem", marginTop: "90px", height: "400px" }}>
            <Card.Img
              style={{ width: "100%", height: "50%" }}
              variant="top"
              src={element.img}
            />
            <Card.Body>
              <Card.Title>
                {" "}
                {element.firstName} {element.lastName}
              </Card.Title>
              <Card.Text>{element.price}</Card.Text>
              <Card.Text>{element.description}</Card.Text>
              <Button
                style={{
                  backgroundColor: "#86cb6a",
                  marginLeft: "5px",
                  border: "none",
                }}
                variant="primary"
                onClick={() => {
                  func(element.doctorsService_id);
                }}
              >
                Booking
              </Button>
              <Button
                style={{
                  // backgroundColor: "#86cb6a",
                  width: "48%",
                  // border: "none"
                  marginLeft: "5px",
                }}
                variant="outline-secondary"
                onClick={() => {
                  setSender(element.user_id);
                  setReceiver(element.doctor_id);
                  setFirstName("Dr " + element.firstName);
                  setLastName(element.lastName);
                  setImg(element.img);
                  console.log(element.user_id);
                  console.log(element.doctor_id);
                  history.push("/conversation");
                }}
              >
                Chat
              </Button>{" "}
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default MyDoctor;
