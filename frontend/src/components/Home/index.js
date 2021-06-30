import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setStories } from "../../reducers/story";
import health from "./health.jpg";
import health2 from "./health2.png";
import "./home.css";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/stories`)
      .then((result) => {
        dispatch(setStories(result.data));
      })
      .catch((err) => {
        dispatch(setStories("some thing bad"));
      });
  }, []);

  const state = useSelector((state) => {
    return {
      stories: state.storiesReducer.stories,
    };
  });
  
  return (
    <div>
      <section className="About">
        <img className="img" src={health} alt="healthy life" />
        <div className="paragraph">
          <span className="welcome">WELCOME TO HEALTHCARE</span>
          <h3 className="h3">
            Hello! Health Care is a natural way of improving your health
          </h3>
          <p className="p">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. Even the
            all-powerful Pointing has no control about the blind texts it is an
            almost unorthographic life One day however a small line of blind
            text by the name of Lorem Ipsum decided to leave for the far World
            of Grammar.
          </p>
          <img
            className="img2"
            src={health2}
            alt="healthy life"
            width="250rem"
            heigh="100rem"
          />
        </div>
      </section>

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
