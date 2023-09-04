import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        border: "solid",
        background: "black",
      }}
    >
      <button>DashBoard</button>
      <Link to="/Login">
        <button>Login</button>
      </Link>
    </div>
  );
}
