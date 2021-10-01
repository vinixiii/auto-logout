import React from "react";
import { Menu } from "../../components/Menu";

export function Home() {
  return (
    <div style={{ flex: 1 }}>
      <Menu />
      <div style={{ padding: 30 }}>
        <h1>Home</h1>
      </div>
    </div>
  );
}
