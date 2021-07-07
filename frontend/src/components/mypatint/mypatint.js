import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const MyPatient = () => {
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
    <div>
      {result.map((element, index) => {
        return (
          <div
            onClick={() => {
              history.push(`./../patient/${element.user_id}`);
            }}
          >
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
