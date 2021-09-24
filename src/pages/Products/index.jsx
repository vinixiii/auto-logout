import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../components/Nav";

export function Products() {
  return (
    <div style={{ display: "flex", flex: "1", flexDirection: "column" }}>
      <div>
        <Nav to="/home">Navegar</Nav>
        <Link to="/" onClick={() => localStorage.removeItem("token")}>
          Sair
        </Link>
      </div>
      <h1>Products</h1>
    </div>
  );
}
