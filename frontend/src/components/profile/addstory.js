import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";

const AddStory = () => {
  const token = localStorage.getItem("token");

  const [description, setDescription] = useState("");
  const addStory = () => {
    axios
      .post(
        "http://localhost:5000/story",
        { description },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        localStorage.setItem("stories", JSON.stringify(result.data));
      })
      .catch((err) => {});
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={addStory}>add story</button>
    </div>
  );
};

export default AddStory;
