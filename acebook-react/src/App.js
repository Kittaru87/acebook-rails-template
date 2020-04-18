import React, { Fragment } from "react";
import NavigationBar from "./components/NavBar/NavigationBar";
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
