import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./mypatint.css";
import { Button, Card } from "react-bootstrap";

const MyPatient = ({
  setSender,
  setReceiver,
  setFirstName,
  setLastName,
  setImg,
}) => {
  let token = localStorage.getItem("token");

  const history = useHistory();

  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/mypatient", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setResult(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="my-patient">
      {result.map((element, index) => {
        console.log(element);
        return (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={element.img}
                style={{
                  width: "17.9rem",
                  height: "20rem",
                  transition: "width 2s, height 4s",
                }}
              />
              <Card.Body style={{ backgroundColor: "rgb(0 0 0 / 8%)" }}>
                <Card.Title>
                  {element.firstName} {element.lastName}
                </Card.Title>
                <Card.Title>Age: {element.age}</Card.Title>
                <Card.Text></Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    history.push(`./../patient/${element.user_id}`);
                  }}
                  style={{ backgroundColor: "black", border: "none" }}
                >
                  Tracker Food
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    setSender(element.user_id);
                    setReceiver(element.doctor_id);
                    setFirstName(element.firstName);
                    setLastName(element.img);
                    setImg();
                    console.log(element.user_id);
                    console.log(element.doctor_id);
                    history.push("/conversation");
                  }}
                  style={{ backgroundColor: "black", border: "none" }}
                >
                  Chat
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default MyPatient;
