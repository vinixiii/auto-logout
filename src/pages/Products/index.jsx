import React from "react";
import { ToastContainer } from "react-toastify";
import { Menu } from "../../components/Menu";

export function Products() {
  return (
    <div style={{ flex: 1 }}>
      <Menu />
      <div style={{ padding: 30 }}>
        <h1>Products</h1>
      </div>
      <ToastContainer />
    </div>
  );
}
