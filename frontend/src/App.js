import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";

import DoctorDetails from "./components/doctordetails/doctordetails";
import Doctor from "./components/Doctor/Doctor";


import Info from "./components/doctorinfo/doctorinfo";
import Navigation from "./components/navigation";
import DoctorProfile from "./components/doctor_profile/doctor_profile"
import SignUp from "./components/signUp/signUp";
import Home from "./components/Home"
import DoctorAdmin from "./components/admin/admin"

const App = () => {
  return (
    <>
      <div className="App">

<Navigation/>
<Home/>

  <Route exact path="/login" render={() => <Login />} />

  <Route exact path="/doctor/:id" render={() => <DoctorDetails />} />

  <Route exact path="/doctorInfo" render={()=> <Info />}/>

  <Route exact path="/doctor" render={() => <Doctor/>} />

  <Route exact path="/register" render={() => <SignUp />} />
  <Route exact path="/doctorProfile" render={() =><DoctorProfile/>}/>
  <Route exact path="/doctorAdmin" render={() => <DoctorAdmin/>} />

</div>

    </>
  );
};

export default App;
