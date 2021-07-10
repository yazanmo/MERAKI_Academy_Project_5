import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const Conversation = ({ sender, receiver }) => {
  const history = useHistory();
  console.log(sender, receiver);

  useEffect(() => {
    axios
      .post(`http://localhost:5000/conversation/con`, { sender, receiver })
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div></div>;
};

export default Conversation;
