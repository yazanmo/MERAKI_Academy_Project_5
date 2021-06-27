import React from "react";
import { Switch, Route, Link, useParams, useHistory } from "react-router-dom";
import Login from "./components/login/login";
const App = () => {
  return (
    <>
      <div className="App">
        <Route exact path="/login" render={() => <Login />} />
		</div>
    </>
  );
};

export default App;
