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
      .get(`/mydoctor`, {
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
    <>
      <div className="my-doc-card-p">
        {result.length == 0 ? (
          <div className="message-mydoctor">
            <img src="https://scontent.famm9-1.fna.fbcdn.net/v/t1.15752-9/218705876_138676378387426_8896641353733256252_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFB1vD-WOhTQhoRQJMbXSq57BaJyv5NmwLsFonK_k2bAsYQOLqdD13KPZpzFywuepc&_nc_ohc=UexkXsg-uZ0AX8vd6y9&_nc_ht=scontent.famm9-1.fna&oh=543c51749df56044f3349a173858d57e&oe=60FA0113" />
          </div>
        ) : (
          result.map((element, index) => {
            return (
              <Card
                style={{ width: "18rem", marginTop: "90px", height: "400px" }}
              >
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
          })
        )}
      </div>
    </>
  );
};

export default MyDoctor;
