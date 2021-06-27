import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";
import Navigation from "./components/navigation";
const App = () => {
  return (
    <>
      <div className="App">
		  <Navigation/>
        <Route exact path="/login" render={() => <Login />} />
		</div>
    </>
  );
};

export default App;
