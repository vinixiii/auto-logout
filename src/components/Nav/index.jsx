import React from "react";
import { Link } from "react-router-dom";
import { parseJwt } from "../../services/auth";

export function Nav({ to, children }) {
  function handleCheckTokenValidation() {
    // const { exp } = parseJwt();
    // if (exp * 1000 < Date.now()) {
    //   return localStorage.removeItem("token");
    // }
    // return console.log("2");
  }

  return (
    <Link to={to} onClick={handleCheckTokenValidation}>
      {children}
    </Link>
  );
}
