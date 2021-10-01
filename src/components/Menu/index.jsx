import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export function Menu() {
  return (
    <header>
      <div className="header__container">
        <div style={{ display: "flex", gap: 48 }}>
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        <Link to="/" onClick={() => localStorage.removeItem("token")}>
          Sair
        </Link>
      </div>
    </header>
  );
}
