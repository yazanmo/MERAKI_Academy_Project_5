import React, { useEffect,useState } from "react";
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
import noAvatar from "./noAvatar.png";
         
import Slider from "react-slick";

export default function Home({ homePageSection, setHomePageSection }) {
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState([])
  const [specificPage, setSpecificPage] = useState(1)

  

  // smooth scroller
  useEffect(() => {
    if (homePageSection !== "") {
      console.log(homePageSection);
      scroller.scrollTo(homePageSection, { smooth: true });
      setHomePageSection(" ");
    }
  }, [homePageSection]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/stories?page=2&limit=1`)
  //     .then((result) => {
  //       dispatch(setStories(result.data));
  //       localStorage.setItem("stories", JSON.stringify(result.data));
  //     })
  //     .catch((err) => {
  //       dispatch(setStories("some thing bad"));
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/stories?page=${specificPage}&limit=1`)
      .then((result) => {
        console.log("==========",result.data);
        dispatch(setStories(result.data));
       localStorage.setItem("stories", JSON.stringify(result.data));
      })
      .catch((err) => {
     
      });
  }, [specificPage]);

  const state = useSelector((state) => {
    return {
      stories: state.storiesReducer.stories,

    };
  });
  
  const pageArray=[]
  useEffect(() => {
    for (let index = 0; index < state.stories.length; index++) {
      pageArray.push(index+1)
    }
    setPageNum([...pageArray])
  }, [])
  
  

  console.log("pageNum",pageNum);
console.log("sttate stories",state.stories);
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
      {/* <div className="slide-container">
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
      </div> */}
      <div className="home-Img">
        <p className="home-p">
        <h1 className="h1p">At Health Care Website</h1>
        <p className="home-pp"> we believe health is not just the absence of disease, but a state of immense vitality. It is our mission to help you feel better, live longer, and become the best possible you!</p>
        </p>
        
      </div>
      <div className="information">
        <div className="info-1">
          <img className="icon-information"  src="https://img.icons8.com/ios/80/000000/examination.png" />
          <h3>Subscribe with a private doctor</h3>
          <p>Exactly what you want, how you want it. Get a personalized low-carb or keto meal plan for your diet goals. Start losing weight and improving your health now!</p>
        </div>
        <div className="info-2">
        <img className="icon-information" src="https://img.icons8.com/ios-filled/80/000000/heart-health.png"/>
        <h3>health food</h3>
          <p>What we eat doesn’t just affect our physical health: it can also affect our mental health and wellbeing.</p>
        </div>
        <div className="info-3">
        <img className="icon-information" src="https://img.icons8.com/dotty/80/000000/health-calendar.png"/>

        <h3>UROLOGY CARE</h3>
          <p>Constant monitoring of your health system</p>
        </div>
      </div>
      <div className=""></div>
      {/* about section */}

      {/* <section className="About" title="About">
        <img className="img" src={health} alt="healthy life" />
        <div className="paragraph">
          <span className="welcome">WELCOME TO HEALTHCARE</span>
          <h3 className="h3Section">
            Hello! Health Care is a natural way of improving your health
          </h3>
          <p className="pSection">
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
      </section> */}

      {/* services section */}

      {/* <section title="ourServices" id="services">
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
      </section> */}

      {/* stories section */}

      <section className="stories" title="stories" id="stories">
        

<div className="service-page">
    <h2>A MODERN, FULL-SERVICE Health CARE</h2>
<p className="service-page-p">At Health Care Website, we believe health is not just the absence of disease, but a state of immense vitality. It is our mission to help you feel better, live longer, and become the best possible you!</p>

    </div>






<div className="container-service">
<div className="card-service">
  <div className="card-service-partenr">
    <div>
    <svg className="symbol-service" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
style={{width:"50px", height:"50px"}}
viewBox="0 0 172 172"
style={{fill:"#000000;"}}><g style={{fill:"none" ,fillrule:"nonzero" ,stroke:"none" ,strokewidth:"1", strokelinecap:"butt", strokelinejoin:"miter", strokemiterlimit:"10", strokedasharray:"", strokedashoffset:"0" ,fontfamily:"none", fontweight:"none" ,fontsize:"none" ,textanchor:"none" }}style={{mixblendmode: "normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M48.61015,13.76c-26.80448,0 -48.61015,21.90371 -48.61015,48.82515c0,4.56144 0.43865,8.91525 1.21609,13.09485h7.04125c-0.88064,-4.17272 -1.37734,-8.52653 -1.37734,-13.09485c0,-23.12712 18.71656,-41.94515 41.73015,-41.94515c12.6936,0 23.45677,5.37527 31.98797,15.97047c0.66048,0.8256 2.61359,3.33922 2.61359,3.33922c1.30376,1.67872 4.13171,1.67872 5.43547,0c0,-0.00344 1.9428,-2.50346 2.6136,-3.3325c8.40736,-10.45416 19.51802,-15.97719 32.12906,-15.97719c23.0136,0 41.73015,18.81803 41.73015,41.94515c0,39.90056 -36.26201,64.28769 -62.73969,82.08969c-6.21264,4.17616 -11.83231,8.73271 -16.39375,12.53047c-3.64296,-2.9928 -10.99,-8.91831 -16.3736,-12.53719c-18.0256,-12.12256 -40.57899,-27.30221 -53.14531,-48.34813h-7.97516c12.79336,24.11784 37.60382,40.82866 57.28406,54.06578c6.96256,4.6784 17.90289,13.83509 18.01297,13.92797c0.59168,0.4988 1.35256,0.73235 2.12312,0.73235c0.89096,0 1.7945,-0.3124 2.48594,-0.88688c4.58552,-3.83904 10.86932,-9.10192 17.81812,-13.77344c27.76424,-18.67232 65.78328,-44.23647 65.78328,-87.80063c0,-26.92144 -21.80567,-48.82515 -48.61015,-48.82515c-14.75416,0 -27.70791,6.40136 -37.46375,18.51016c-9.7524,-12.1088 -22.6581,-18.51016 -37.31594,-18.51016zM60.1664,37.84c-1.61909,0.01765 -3.00673,1.1619 -3.3325,2.74797l-9.63469,46.80953l-6.14094,-16.36687c-0.48163,-1.27931 -1.67496,-2.15212 -3.04006,-2.2235c-1.3651,-0.07139 -2.64297,0.67219 -3.2554,1.89428l-5.92594,11.8586h-21.95687c-1.24059,-0.01754 -2.39452,0.63425 -3.01993,1.7058c-0.62541,1.07155 -0.62541,2.39684 0,3.46839c0.62541,1.07155 1.77935,1.72335 3.01993,1.7058h24.08c1.30304,0.00009 2.49431,-0.736 3.07719,-1.9014l3.35266,-6.70531l7.55187,20.13609c0.5422,1.42912 1.96229,2.32914 3.48611,2.20942c1.52382,-0.11973 2.78592,-1.23049 3.09827,-2.72676l8.4589,-41.0986l10.58875,58.22469c0.275,1.51868 1.52773,2.66838 3.06438,2.81234c1.53665,0.14396 2.98113,-0.75304 3.53343,-2.19422l13.94812,-36.26781l7.14203,19.04094c0.46166,1.22305 1.57662,2.07878 2.87746,2.20843c1.30084,0.12966 2.56277,-0.48916 3.25676,-1.59703l7.59219,-12.14078h16.22578c1.22682,2.12492 3.49245,3.43566 5.9461,3.44c3.79972,0 6.88,-3.08028 6.88,-6.88c0,-3.79972 -3.08028,-6.88 -6.88,-6.88c-2.45604,0.00194 -4.72479,1.313 -5.95281,3.44h-18.12719c-1.18612,0.00099 -2.28807,0.61291 -2.91594,1.61922l-4.91141,7.85422l-7.87437,-21.00281c-0.50262,-1.33611 -1.77815,-2.22303 -3.20566,-2.22899c-1.42751,-0.00597 -2.71041,0.87025 -3.22418,2.20212l-12.79922,33.27125l-11.56297,-63.61313c-0.30102,-1.64771 -1.74496,-2.83916 -3.41985,-2.82187z"></path></g></g></svg>
</div>
<div className="asdasdfafsdfsadf">

<h3>Mental health</h3>
<p style={{color:"grey"}}>What we eat doesn’t just affect our physical health: it can also affect our mental health and wellbeing.</p>

</div>
</div>

<div className="card-service-partenr">
<svg className="symbol-service2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
style={{width:"50px", height:"50px"}}
viewBox="0 0 172 172"
style={{fill:"#000000;"}}><g style={{ fill:"none", fillrule:"nonzero", stroke:"none" ,strokewidth:"1" ,strokelinecap:"butt" ,strokelinejoin:"miter", strokemiterlimit:"10", strokedasharray:"" ,strokedashoffset:"0", fontfamily:"none" ,fontweight:"none", fontsize:"none" ,textanchor:"none"}} style={{mixblendmode:" normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M65.84375,22.57605c-2.28438,0 -4.03125,1.74688 -4.03125,4.03125c0,2.28438 1.74687,4.03125 4.03125,4.03125h40.3125c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28437 -1.74688,-4.03125 -4.03125,-4.03125zM43,35.07135c-9.675,0 -17.46875,7.79375 -17.46875,17.46875v66.9198c0,9.675 7.79375,17.46875 17.46875,17.46875h86c9.675,0 17.46875,-7.79375 17.46875,-17.46875v-66.9198c0,-9.675 -7.79375,-17.46875 -17.46875,-17.46875zM43,43.13385h86c5.24062,0 9.40625,4.16563 9.40625,9.40625v66.9198c0,5.24063 -4.16563,9.40625 -9.40625,9.40625h-86c-5.24063,0 -9.40625,-4.16562 -9.40625,-9.40625v-66.9198c0,-5.24062 4.16562,-9.40625 9.40625,-9.40625zM86,64.5c-3.7625,0 -6.71875,2.95625 -6.71875,6.71875v9.67395h-9.67395c-3.7625,0 -6.71875,2.95625 -6.71875,6.71875c0,3.7625 2.95625,6.71875 6.71875,6.71875h9.67395v9.67657c0,3.7625 2.95625,6.71875 6.71875,6.71875c3.7625,0 6.71875,-2.95625 6.71875,-6.71875v-9.67657h9.67395c3.7625,0 6.71875,-2.95625 6.71875,-6.71875c0,-3.7625 -3.09063,-6.71875 -6.71875,-6.71875h-9.67395v-9.67395c0,-3.7625 -2.95625,-6.71875 -6.71875,-6.71875z"></path></g></g></svg>

<div className="asdasdfafsdfsadf">

<h3>24 HRS EMERGENCY</h3>
<p style={{color:"grey"}}>When you stick to a diet of healthy food, you're setting yourself up for fewer mood fluctuations, an overall happier outlook and an improved ability to focus</p>

</div>
</div>

<div className="card-service-partenr">
<svg className="symbol-service3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
style={{width:"50px", height:"50px"}}
viewBox="0 0 172 172"
style={{fill:"#000000;"}}><g style={{ fill:"none", fillrule:"nonzero", stroke:"none", strokewidth:"1", strokelinecap:"butt", strokelinejoin:"miter" ,strokemiterlimit:"10", strokedasharray:"" ,strokedashoffset:"0", fontfamily:"none", fontweight:"none", fontsize:"none", textanchor:"none"}} style={{mixblendmode:" normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#3498db"><path d="M153.1875,95.00581c0,-12.96987 -7.0735,-20.37394 -7.0735,-20.37394c2.408,-20.02725 -2.84875,-29.70762 -18.0815,-38.13025c-6.89881,-13.62025 -29.11906,-27.41787 -42.07012,-16.15187c-13.68206,-10.67475 -32.77138,1.02662 -37.81581,11.70406c-3.15781,1.892 -11.33856,6.92031 -11.91369,16.899c-6.99287,5.27556 -10.89244,10.89781 -10.42213,28.36656c-5.51475,5.934 -11.79006,14.40231 -1.45394,26.45038c-2.61494,10.01094 2.47519,19.53006 9.58362,25.83762c2.34887,8.84994 13.12575,17.95519 22.1665,18.64588c6.61394,10.72044 23.13669,8.86337 29.85544,1.43244c7.03319,8.59731 24.9185,8.34469 29.85544,-1.43244c9.03269,-0.68531 20.812,-9.40625 23.1555,-18.25081c3.95331,-7.63519 11.21762,-16.23788 8.59731,-26.23269c0,0 5.61688,-1.13681 5.61688,-8.76394zM62.62144,138.63469c-8.93056,-1.36794 -19.16456,-4.43975 -19.96812,-14.19c-6.40969,-3.92106 -6.60856,-7.83944 -7.58681,-13.74656c3.28412,1.85169 6.78594,4.07694 13.39988,4.69238c5.504,11.94325 17.40156,11.95131 25.92363,12.95106l1.25775,-5.73244c-5.95012,-0.57244 -15.33488,-3.44 -16.07931,-9.54063c5.10088,-0.44075 7.93888,-4.94231 7.93888,-4.94231l-3.68725,-5.08744c-9.03269,8.78006 -20.24225,-0.49719 -29.86619,-4.30269c-7.17025,-7.94694 -0.559,-13.96156 0.946,-15.45312c4.97994,-0.645 7.912,6.67575 7.912,6.67575l5.95819,-1.85975c-1.49962,-4.71656 -4.46125,-13.96156 -12.6205,-16.82644c0.08062,-6.9015 -0.03494,-13.94813 7.64594,-17.04412c0.344,-7.57069 6.20544,-13.56112 9.98406,-13.03169c11.1155,3.96944 -0.46494,22.32237 12.34638,30.13225l4.38869,-5.17075c-9.288,-9.40625 6.76444,-16.05781 -9.31756,-33.454c2.20913,-4.28387 13.06394,-7.73194 19.38494,-3.02881c1.52919,9.64275 1.22281,22.39225 -1.54263,29.15131c3.07181,7.98725 2.64181,17.75094 1.54263,26.5955c-5.38306,-3.03419 -16.75119,4.07962 -18.98719,-2.19837l-3.07181,4.72731c7.67819,10.51619 14.64956,2.36231 22.059,9.12406c1.93231,9.38475 2.55581,18.103 0,25.19531c1.68237,6.60587 1.52919,12.90269 0,17.92025c-11.66644,11.21225 -17.96056,-1.55606 -17.96056,-1.55606zM105.80956,45.94281c0,0 -2.05056,13.29775 -14.4695,11.27138c-2.23062,-12.4485 0,-27.5415 0,-27.5415c14.46412,-7.89856 27.52806,8.31244 30.79337,13.91319c10.03244,4.54994 14.78125,13.41063 13.45094,28.54394l-0.20425,-0.18275c-11.77662,13.82719 -21.08612,-12.65812 -35.5395,7.43363l4.10381,3.26263c10.94887,-11.16925 13.11231,12.69575 34.58812,0.72562c5.3105,4.44781 5.16537,10.17219 -0.50256,15.20856c-4.63594,0.44881 -12.1905,1.89738 -17.72675,6.407c0,0 -11.99969,-2.99656 -8.92787,-10.86288l-4.42363,-1.73075c-6.63544,8.37963 -2.95087,17.2215 6.82894,21.69619c0,0 -3.50987,6.46612 -11.36275,6.22156l-0.81431,6.622c25.24906,0.301 15.59556,-17.05756 37.29981,-17.40156c-1.14487,6.36131 -8.22106,11.36544 -9.84969,16.31313c-2.66063,7.54112 -8.46294,10.87363 -16.89631,12.18781c-1.34106,5.25675 -10.59144,0.81162 -20.82006,2.15269c-0.44344,0.05912 1.37331,-8.23719 -0.6235,-18.98988c1.53725,-6.45269 1.58025,-13.53425 0.38969,-21.80638c2.42681,-11.59925 1.08038,-22.661 0.23381,-31.15081c22.17994,-0.87613 21.92462,-18.76144 20.35512,-24.03163"></path></g></g></svg>

<div className="asdasdfafsdfsadf">

<h3>Mental health</h3>
<p style={{color:"grey"}}>You don’t need to follow the latest fad diet. A Whole food Plant-Based diet is proven to every aspect of your health.</p>

</div>
</div>
</div>

<img className="img-service2" src="https://static.wixstatic.com/media/ce9e0d_d5ab1339ca5342b3bd98c2a818616190~mv2_d_2339_2101_s_2.jpg"/>


</div>




<div className="OUR-DEPARTMENT">
<h2 className="OUR-DEPARTMENT-h2">OUR DEPARTMENT</h2>
<div className="OUR-DEPARTMENT-card">
  <div>
  <img src="https://img.icons8.com/ios/120/000000/caloric-energy--v1.png"/>
<p className="OUR-DEPARTMENT-p">calculate a caloric</p>

</div>

<div>
<img src="https://img.icons8.com/material-outlined/120/000000/woman-athlete.png"/>
<p className="OUR-DEPARTMENT-p2">Sport</p>

</div>


<div>
<img src="https://img.icons8.com/dotty/120/000000/technology-lifestyle.png"/>
<p className="OUR-DEPARTMENT-p">text-massege</p>

</div>



<div>
<img src="https://img.icons8.com/ios/120/000000/healthy-eating.png"/>
<p className="OUR-DEPARTMENT-p">Healthy eating</p>

</div>



</div>




</div>



      {/* <section className="stories" title="stories" id="stories">

        <div className="hi">
          <span className="welcome">STORIES</span>
          <h3 className="h3">Successfull Stories</h3>
        </div>
        <div className="storyCard">
          {state.stories &&
            state.stories.map((story, index) => {
              console.log(story.img);
              return (
                <ul key={index} className="ul">
                  {" "}
                  <img
                    className="storyImg"
                    src={story.img ? story.img : noAvatar}
                  />
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

        <div className="pageNumber"> 
        <ul className="pagination" >
        <li className="liPagination" onClick={(e)=>{setSpecificPage(1)}}>1</li>
        <li className="liPagination" onClick={(e)=>{setSpecificPage(2)}}>2</li>
        <li className="liPagination" onClick={(e)=>{setSpecificPage(3)}}>3</li>
        <li className="liPagination" onClick={(e)=>{setSpecificPage(4)}}>4</li> </ul>
        {/* {pageNum&&
        pageNum.map((element,index)=>{
          console.log("element",element);
          console.log("specificPage",specificPage);
         
         <li key={index}  onClick={(e)=>{setSpecificPage(element)}} >{element}</li> 

        })} */}
        </div>
       
      </section>

      </section> */}


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
