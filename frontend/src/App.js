import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";
import DoctorDetails from "./components/doctordetails/doctordetails";
import Doctor from "./components/Doctor/Doctor";
import Info from "./components/doctorinfo/doctorinfo";
import Navigation from "./components/navigation";

import DoctorProfile from "./components/doctor_profile/doctor_profile";
import SignUp from "./components/signUp/signUp";
import Date from "./components/date/date";

import AdminPage from "./components/AdminPage";
import Accept from "./components/Admin/admin";

import Profile from "./components/profile/profile";
import AddStory from "./components/profile/addstory";
import Home from "./components/Home";
import UpdateDoctorProfile from "./components/doctor_profile/updateDoctorProfile";
import FoodTracker from "./components/profile/foodtracker";

import CreateStories from "./components/storie";
import AcceptDoctor from "./components/AcceptDoctor";

import About from "./components/aboutus/about";

import UpdateUserInfo from "./components/profile/updateuserinfo";

import { useState } from "react";


import MyPatient from "./components/mypatint/mypatint";
import MyDoctor from "./components/mydoctor/mydoctor";


const App = () => {
  const [homePageSection, setHomePageSection] = useState("");

  return (
    <>
      <div className="App">
        <Navigation  setHomePageSection={setHomePageSection} />
        <Switch>
          <Route exact path="/" render={() => <Home homePageSection={homePageSection}  setHomePageSection={setHomePageSection} />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route exact path="/doctor/:id" render={() => <DoctorDetails />} />
          <Route exact path="/admin" render={() => <Accept />} />
          <Route exact path="/doctor" render={() => <Doctor />} />
          <Route exact path="/register" render={() => <SignUp />} />
          <Route exact path="/doctorProfile" render={() => <DoctorProfile />} />
          <Route exact path="/addyourstory" render={() => <AddStory />} />
          <Route
            exact
            path="/editProfile"
            render={() => <UpdateDoctorProfile />}
          />

          <Route exact path="/foodtracker" render={() => <FoodTracker />} />

          <Route
            exact
            path="/create/stories"
            render={() => <CreateStories />}
          />
          <Route exact path="/adminPage" render={() => <AdminPage />} />
          <Route exact path="/accept" render={() => <Accept />} />
          <Route exact path="/doctorInfo" render={() => <Info />} />
          <Route
            exact
            path="/accept/doctor/:doctor_id"
            render={() => <AcceptDoctor />}
          />

          <Route exact path="/date" render={() => <Date />} />

          <Route exact path="/about" render={() => <About />} />

          <Route exact path="/edit/profile" render={() => <UpdateUserInfo />} />
          <Route exact path="/mypatient" render={() => <MyPatient />} />
          <Route exact path="/mydoctor" render={() => <MyDoctor />} />
        </Switch>
      </div>
    </>
  );
};

export default App;
