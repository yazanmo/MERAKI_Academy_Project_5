import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";

import Navigation from "./components/navigation";

import SignUp from "./components/signUp/signUp"

const App = () => {
  return (
    <>
      <div className="App">

		  <Navigation/>
        

        <Route exact path="/login" render={() => <Login />} />
		<Route exact path="/register" render={() => <SignUp />} />


		</div>
    </>
  );
};

export default App;
