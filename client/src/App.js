import "./App.css";
import React, { Fragment, createContext, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import DashBoard from "./components/DashBoard";
import Signup from "./components/Signup";
import styled from "styled-components";
import Accounts from "./components/Accounts";
import AccountProfile from "./components/AccountProfile";

export const AccountContext = createContext()

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
  const [accounts, setAccounts] = useState([])
  const handleLogout = () => {
    fetch("http://localhost:3002/users/logout").then(() => {
      localStorage.removeItem("jsonwebtoken");
      window.alert("Logged out");
      window.location.reload();
    });
  };
  return (
    <div className="App">
      <AccountContext.Provider value={[accounts, setAccounts]}>
      <BrowserRouter>
        <Container>
        <Tabs>
            <Link to="/Accounts">Accounts</Link>
          </Tabs>
          <Tabs>
            <Link to="/Dashboard">Create New Company</Link>
          </Tabs>
          <Tabs>
            <Link to="/login">Login</Link>
          </Tabs>
          <Tabs>
            <Link to="/Signup">Signup</Link>
          </Tabs>
          <Tabs>
            <button onClick={handleLogout}>Logout</button>
          </Tabs>
        </Container>
        <Fragment>
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Accounts" element={<Accounts />} />
            {/* <Route path="/AccountProfile/:id" element={<AccountProfile />} /> */}

          </Routes>
        </Fragment>
      </BrowserRouter>
      </AccountContext.Provider>
    </div>
  );
}

export default App;
