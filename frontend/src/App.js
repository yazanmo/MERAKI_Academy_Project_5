import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";

// import DoctorDetails from "./components/doctordetails/doctordetails";
import Doctor from "./components/Doctor/Doctor";
import CreateStories from "./components/storie"



import Navigation from "./components/navigation";

import SignUp from "./components/signUp/signUp";
import Home from "./components/Home"


const App = () => {
  return (
    <>
      <div className="App">

		  <Navigation/>
      <Home/>
      <Route exact path="/create/stories" render={() => <CreateStories />} />
        <Route exact path="/login" render={() => <Login />} />
 
        {/* <Route exact path="/doctor/:id" render={() => <DoctorDetails />} /> */}
    


        <Route exact path="/doctor" render={() => <Doctor/>} />

		<Route exact path="/register" render={() => <SignUp />} />



		</div>

    </>
  );
};

export default App;
