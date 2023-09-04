import "./App.css";
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import styled from "styled-components";

const Tabs = styled.button`
  border: solid black 5px;
  margin: 10px;
  padding: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid;
  background: black;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
        <Tabs>
            <Link to="/DashBoard">DashBoard</Link>
          </Tabs>
          <Tabs>
            <Link to="/login">Login</Link>
          </Tabs>
          <Tabs>
            <Link to="/Signup">Signup</Link>
          </Tabs>
        </Container>
        <Fragment>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
