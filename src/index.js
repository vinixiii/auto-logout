import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { parseJwt, userAuthenticated } from "./services/auth";

import "./index.css";

import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

const CustomRoute = ({ component: Component }) => {
  const { exp } = parseJwt();

  if (exp * 1000 < Date.now()) {
    localStorage.removeItem("token");
    console.log("Token inválido");
    return;
  }

  console.log("Token válido");

  return (
    <Route
      render={(props) =>
        userAuthenticated() && parseJwt().role === "1" ? (
          <Component {...props} />
        ) : (
          <Redirect to="login" />
        )
      }
    />
  );
};

const routing = (
  <Router>
    <div style={{ display: "flex", flex: "1" }}>
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
