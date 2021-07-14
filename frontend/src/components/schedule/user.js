import React, { useState, useEffect } from "react";
import "./schedule.css";
import axios from "axios";

const UserSchedule = () => {
  const token = localStorage.getItem("token");
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userSchedule`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((result) => {
        setResult(result.data);
      })
      .catch((err) => {});
  }, [result]);

  return (
    <>
      {result &&
        result.map((elem, i) => {
          return (
            <div>
              <img src={elem.img} />
              <p>
                {elem.firstName}
                {elem.lastName}
              </p>
              <p>{elem.date}</p>
              <p>{elem.time}</p>
              <img
                style={{ height: "50px", width: "50px" }}
                src="https://img.icons8.com/color/48/000000/delete-sign--v1.png"
                onClick={() => {
                  axios
                    .delete(
                      `http://localhost:5000/delete-scheduleUser/${elem.schedule_id}`,

                      {
                        headers: {
                          authorization: "Bearer " + token,
                        },
                      }
                    )
                    .then((result) => {
                      
                    })
                    .catch((err) => {
                      
                    });
                }}
              />
            </div>
          );
        })}
    </>
  );
};
export default UserSchedule;
