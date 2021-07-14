import React, { useState } from "react";
import { useHistory } from "react-router";
import { createStories } from "../../reducers/story";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./storie.css";

export default function CreateStories() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const token = localStorage.getItem("token");
  const stories = JSON.parse(localStorage.getItem("stories"));
  console.log(stories);
  const add = () => {
    axios
      .post(
        "http://localhost:5000/story",
        {
          description,
        },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        dispatch(createStories(description));
        setMessage("Thanks for your story");
        // history.push("/profile");
      })
      .catch((err) => {});
  };

  return (
    <div className="story">
      <div className="story-img">
        <img src="https://cdn.pixabay.com/photo/2018/09/07/17/50/fruit-3661159__340.jpg" />
      </div>
      <div className="story-input">
        <textarea
          type="text"
          placeholder="Share with us your brilliant story"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button onClick={add}>ADD</button>
        <p>{message}</p>
      </div>
      
    </div>
  );
}
