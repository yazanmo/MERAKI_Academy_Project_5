import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setStories } from "../../reducers/story";
import health from "./health.jpg";
import health2 from "./health2.png";
import win from "./win.png";
import food from "./food.png";
import checklist from "./checklist.png";
import rules from "./rules.png";
import { scroller } from "react-scroll";
import "./home.css";
import happy from "./happy.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import noAvatar from "./noAvatar.png"

export default function Home({ homePageSection, setHomePageSection }) {
  // const sliderArray =[slider0,slider1,slider2,slider3,slider4,slider5,slider6]
  const dispatch = useDispatch();

  // smooth scroller
  useEffect(() => {
    if (homePageSection !== "") {
      console.log(homePageSection);
      scroller.scrollTo(homePageSection, { smooth: true });
      setHomePageSection(" ");
    }
  }, [homePageSection]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/stories`)
      .then((result) => {
        console.log(result.data);
        dispatch(setStories(result.data));
        localStorage.setItem("stories", JSON.stringify(result.data));
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

  //array for slider
  const arr = [
    "https://images.unsplash.com/photo-1604480131833-5d7aea770e1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=890&q=80",
    "https://images.unsplash.com/photo-1467453678174-768ec283a940?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=728&q=80",
    "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1486218119243-13883505764c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
    "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80",
  ];

  return (
    <div className="home">

      {/* slider */}
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div
              className="imageSlider"
              style={{ backgroundImage: `url(${arr[0]})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="imageSlider"
              style={{ backgroundImage: `url(${arr[1]})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="imageSlider"
              style={{ backgroundImage: `url(${arr[2]})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="imageSlider"
              style={{ backgroundImage: `url(${arr[3]})` }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              className="imageSlider"
              style={{ backgroundImage: `url(${arr[4]})` }}
            ></div>
          </div>
        </Slide>
      </div>


{/* about section */}
      <section className="About" title="About">
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


      {/* services section */}

      <section title="ourServices" id="services">
        <div className="line">
          <span className="welcome">OUR SERVICES</span>
          <h3 className="h3">How it works?</h3>
        </div>
        <div className="allServices">
          <div className="once">
            <img src={rules} className="serviceImg" />
            <h4>Follow the program</h4>
            <p className="servicesParagraph">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="once">
            {" "}
            <img src={checklist} className="serviceImg" />
            <h4>Work for result</h4>
            <p className="servicesParagraph">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="once">
            {" "}
            <img src={food} className="serviceImg" />
            <h4>Eat healthy food</h4>
            <p className="servicesParagraph">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="once">
            {" "}
            <img src={win} className="serviceImg" />
            <h4>Enjoy your life</h4>
            <p className="servicesParagraph">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </section>

{/* stories section */}

      <section className="stories" title="stories" id="stories">
        <span className="welcome">STORIES</span>
        <h3 className="h3">Successfull Stories</h3>
        <div className="storyCard">
          {state.stories &&
            state.stories.map((story, index) => {
              console.log(story.img);
              return (
                <ul key={index} className="ul">
                  {" "}
                  <img className="storyImg"    src = {story.img ? story.img  : noAvatar }/>
                  <div className="nameDes">
                  <li className="description">{story.description}</li>
                  <div className="name">
                    <li>{story.firstName}</li>
                    <li>{story.lastName}</li>
                  </div>
                  </div>
                </ul>
              );
            })}
        </div>
      </section>

      {/* footer */}
      <link
        rel="stylesheet"
        href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      ></link>
      <link
        href="http://fonts.googleapis.com/css?family=Cookie"
        rel="stylesheet"
        type="text/css"
      ></link>

      <footer class="footer-distributed" id="contact">
        <div class="footer-left">
          <h3>
            Health<span>Care</span>
          </h3>

          <p class="footer-links">
            <a href="/">Home</a>·<a href="/doctor"> Our nutrition</a>·
            <a href="/success">Stories</a>·<a href="#">About</a>·
            <a href="/logIn">logIn</a>
          </p>

          <p class="footer-company-name">The A_TEAM &copy; 2021</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>JORDAN</span> AMMAN
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+962787878787</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="">Test</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the website</span>
            physicians featured are in private practice and, as independent
            practitioners, are not agents or employees of our.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
