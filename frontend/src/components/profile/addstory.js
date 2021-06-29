import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";

const AddStory = () => {
  const token = localStorage.getItem("token");
  const [description, setDescription] = useState("");

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
