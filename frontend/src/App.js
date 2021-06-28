import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";
import Doctor from "./components/Doctor/Doctor";



const App = () => {
  return (
    <>
      <div className="App">
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/doctor" render={() => <Doctor/>} />
		</div>
    </>
  );
};

export default App;
