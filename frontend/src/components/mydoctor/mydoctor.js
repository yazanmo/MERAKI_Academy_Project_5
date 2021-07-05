import React, { useState, useEffect } from "react";
import axios from "axios";

const MyDoctor = () => {
  let token = localStorage.getItem("token");
  const [result, setResult] = useState([]);
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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {result.map((element, index) => {
        return (
          <div>
            <p> {element.img}</p>
            <p> {element.firstName}</p>
            <p> {element.lastName}</p>
            <p> {element.lastName}</p>
            <p> {element.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MyDoctor;
