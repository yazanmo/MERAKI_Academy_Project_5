import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Conversation from "./../conversation/conversation";
import "./mydoctor.css";
const MyDoctor = ({ setSender, setReceiver }) => {
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
    <div className="my-doc-card">
      {result.map((element, index) => {
        console.log("element", element);
        return (
          <div className="my-doc-card">
            <Card style={{ width: "300px" }}>
              <Card.Img variant="top" src={element.img} />
              <Card.Body>
                <Card.Title>
              <h1> {element.firstName} {element.lastName}</h1> 
                </Card.Title>
                <Card.Text>
                  <p> {element.price}</p>
                  <p className="p-my-doc"> {element.description}</p>
                </Card.Text>
                <div className="btn-card">
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    func(element.doctorsService_id);
                  }}
                >
                  doctor
                </Button>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    setSender(element.user_id);
                    setReceiver(element.doctor_id);
                    history.push("/conversation");
                  }}
                >
                  Conversation
                </Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default MyDoctor;
