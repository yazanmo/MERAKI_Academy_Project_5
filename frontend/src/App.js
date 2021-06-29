import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";
import DoctorDetails from "./components/doctordetails/doctordetails";
import Doctor from "./components/Doctor/Doctor";
import Navigation from "./components/navigation";
import SignUp from "./components/signUp/signUp";
import Profile from "./components/profile/profile";
import AddStory from "./components/profile/addstory";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />} />

          <Route exact path="/profile" render={() => <Profile />} />

          <Route exact path="/doctor" render={() => <Doctor />} />
          <Route exact path="/addyourstory" render={() => <AddStory />} />

          <Route exact path="/register" render={() => <SignUp />} />
          <Route exact path="/doctor/:id" render={() => <DoctorDetails />} />
        </Switch>
      </div>
    </>
  );
};

export default App;
