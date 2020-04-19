import React, { Fragment } from "react";
import NavigationBar from "./components/NavBar/NavigationBar";
import Home from "./components/Pages/Home/Home";
import Profile from "./components/Pages/Profile/Profile";
import About from "./components/Pages/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// context imports
import PostState from "./context/Post/PostState";

function App() {
  return (
    <PostState>
      <Router>
        <Fragment>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Fragment>
      </Router>
    </PostState>
  );
}

export default App;
