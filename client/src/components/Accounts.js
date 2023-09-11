import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
// import { local } from "../../../config/authenticate";

export default function Accounts() {
  const [account, setAccount] = useState([]);
  // const [token, setToken] = useState(localStorage.getItem("jsonwebtoken") ? localStorage.getItem("jsonwebtoken") : "");

  const fetchAccounts = async () => {
    try {
      const response = await fetch("http://localhost:3002/accounts", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("jsonwebtoken")}`
        }
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log(data);
      setAccount(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          width: "25%",
          border: "solid black",
          boxSizing: "border-box",
          padding: "10px",
        }}
      >
        <div>
          <h4>Accounts</h4>
          { account.length > 0 &&
            account.map((item) => <div key={item._id}>{item.companyName}</div>)}
        </div>
      </div>
    </div>
  );
  
}

