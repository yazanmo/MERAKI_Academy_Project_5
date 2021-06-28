import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const DoctorDetails = () => {
  const { id } = useParams();
  const [result, setResult] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/doctor/${id}`)
      .then((result) => {
        console.log(result.data[0]);
        setResult(result.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="doctor">
      <div className="img">
        <img src={result.img} />
      </div>
      <div className="doctor-details">
        <p>
          Dr {result.firstName} {result.lastName}
        </p>
      </div>
    </div>
  );
};

export default DoctorDetails;
