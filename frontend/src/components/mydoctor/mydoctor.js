import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const MyDoctor = () => {
  let token = localStorage.getItem("token");

  const [result, setResult] = useState([]);
  const [sa, setSa] = useState(false);

  const history = useHistory();
  const func = (id) => {
    return (history.push(`/schedule/${id}`)
    )
  }
        
  useEffect(() => {
    axios
      .get("http://localhost:5000/mydoctor", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log(result.data);
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
    <div>
      {result.map((element, index) => {
        console.log("5555555555555",element);
        return (
          <div
            // onClick={() => {
            //   history.push(`./../doctor/${element.id_service}`);
            // }}
          >
            <p> {element.img}</p>
            <p> {element.firstName}</p>
            <p> {element.lastName}</p>
            <p> {element.price}</p>
            <p> {element.description}</p>
            <button onClick={() => { func(element.doctorsService_id) }}>doctor</button>

          </div>
        );
      })}
    </div>
  );
};

export default MyDoctor;
