import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import jwt from "jsonwebtoken";

import { userAuthenticated } from "./services/auth";

import "./index.css";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

const CustomRoute = ({ component: Component }) => {
  const token = localStorage.getItem("token");
  const userInfo = jwt.decode(token);

  if (userInfo.exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
    console.log("Invalid token!");
  }

  return (
    <Route
      render={(props) =>
        userAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const routing = (
  <Router>
    <div style={{ display: "flex", flex: 1 }}>
      <Switch>
        <Route exact path="/" component={Login} />
        <CustomRoute path="/home" component={Home} />
        <CustomRoute path="/products" component={Products} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
