import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";
import DoctorDetails from "./components/doctordetails/doctordetails";
const App = () => {
  return (
    <>
      <div className="App">
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/doctor/:id" render={() => <DoctorDetails />} />
      </div>
    </>
  );
};

export default App;
