import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setStories } from "../../reducers/story";

export default function Home() {
  useDispatch = dispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/stories`)
      .then((result) => {
        dispatch(setStories(result.data));
      })
      .catch((err) => {
        res.send(err);
      });
  }, []);

  const state = useSelector((state) => {
    return {
      stories: state.storiesReducer.stories,
    };
  });
  return (
    <div>
      {state.stories.map((story) => {
        return (
          <ul>
            {" "}
            <li>{story.lastName}</li>
            <li>{story.description}</li>
          </ul>
        );
      })}
    </div>
  );
}

