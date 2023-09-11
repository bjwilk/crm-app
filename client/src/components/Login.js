import React, { useState } from "react";
// import SignUp from "./SignUp";
import { Link, useNavigate } from "react-router-dom";

// useNavigate - react-router-dom

function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email, password);
    const newUser = {
      email: email,
      password: password,
    };
    const response = await fetch("http://localhost:3002/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
      },
      body: JSON.stringify(newUser),
    });
    const result = await response.json();
    console.log("RESULT HERE", result);
    if (result.jwt) {
      localStorage.setItem("jsonwebtoken", result.jwt);
      window.alert("Successful login!");
      navigate("/");
    } else {
      window.alert("Please sign up!");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "user") {
      setemail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  if (localStorage.getItem("jsonwebtoken")) {
    return (
      <div>
        <h1>You are already logged in!</h1>
        <Link to="/">Home</Link>
      </div>
    );
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          border: "solid black",
          padding: "20px",
          margin: "20px",
        }}
      >
        <h1>Login</h1>

        <form
          style={{
            display: "flex",
            border: "solid black",
            padding: "10px",
            margin: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={email}
            name="user"
            placeholder="email"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
}

export default Login;
