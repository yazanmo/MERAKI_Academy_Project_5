import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const AvgRating = (id) => {
  const getAcgRating = () => {
    axios
      .get(`http://localhost:5000/review/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
  };
  return <div></div>;
};

export default AvgRating;
