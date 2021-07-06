import React, { useState, useEffect } from "react";
import axios from "axios";

const MyPatient = () => {
  let token = localStorage.getItem("token");
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
  const getMyPatient = () => {
    axios
      .get("/mypatient", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {result.map((element, index) => {
        return (
          <div>
            <p>
              {element.firstName} {element.lastName}
              {element.img}
            </p>
            <p>{element.age}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MyPatient;
