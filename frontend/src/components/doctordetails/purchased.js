import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import axios from "axios";

const Purchased = () => {
  let token = localStorage.getItem("token");
  const { id } = useParams();

  useEffect(() => {
    axios
      .post(`http://localhost:5000/mypatient/${id}`, {
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

  return <div></div>;
};

export default Purchased;
