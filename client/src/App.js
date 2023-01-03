import React from "react";
import "./App.css";
import{
BrowserRouter as Router,
Switch,
Route
} from "react-router-dom";
import Home from "../src/pages/home/Home";
import Login from "../src/pages/login/Login";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
