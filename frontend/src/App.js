import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/login" render={() => <Login />} />
      </Switch>
    </>
  );
};

export default App;
