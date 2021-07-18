import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./schedule.css";
import axios from "axios";

const UserSchedule = () => {
  const token = localStorage.getItem("token");
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get(`/userSchedule`, {
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
      <div className="allBooking">
        {result &&
          result.map((elem, i) => {
            return (
              <div className="doctorInfo">
                <img src={elem.img} />
                <p className="doctorName">
                  {elem.firstName}
                  <span>{elem.lastName}</span>
                </p>
                <p className="time-date">
                  <span>time :</span>
                  {elem.time}
                </p>
                <p className="time-date">
                  <span>date :</span>
                  {elem.date}
                </p>
                <button>
                  <img
                    style={{ height: "30px", width: "30px" }}
                    src="https://img.icons8.com/color/48/000000/delete-sign--v1.png"
                    onClick={() => {
                      console.log(elem.schedule_id);
                      axios
                        .delete(
                          `/delete-scheduleUser/${elem.schedule_id}`,

                          {
                            headers: {
                              authorization: "Bearer " + token,
                            },
                          }
                        )
                        .then((result) => {
                          console.log(result);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  />
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default UserSchedule;
