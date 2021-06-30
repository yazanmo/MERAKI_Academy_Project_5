import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setStories } from "../../reducers/story";
import health from "./health.jpg";
import health2 from "./health2.png";
import "./home.css";
import happy from "./happy.jpg";

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
    <div className="home">
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

      <section className="stories">
        <span className="welcome">STORIES</span>
        <h3 className="h3">Successfull Stories</h3>
        <div className="storyCard">
          {state.stories.map((story, index) => {
            return (
              <ul key={index} className="ul">
                {" "}
                <img src={happy} alt="happy" />
                <li>{story.description}</li>
                <li>{story.lastName}</li>
              </ul>
            );
          })}
        </div>
      </section>

      <section>
        <div className="line">
          <span className="welcome">OUR SERVICES</span>
          <h3 className="h3">How it works?</h3>
        </div>
        <div className="allServices">
          <div className="once">
            <h5>Follow the program</h5>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="once">
            {" "}
            <h5>Work for result</h5>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="once">
            {" "}
            <h5>Eat healthy food</h5>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="once">
            {" "}
            <h5>Enjoy your life</h5>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
