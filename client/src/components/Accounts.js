import React, { useState, useEffect } from "react";
import dayjs from "dayjs"

export default function Accounts() {
  const [account, setAccount] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("jsonwebtoken"))

  const fetchAccounts = async () => {
    try {
      const response = await fetch("http://localhost:3002/accounts", {
        method: "GET",
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

  return <div>
    {token ? account.length > 0 && account.map((item) => 
      (<div key={item._id}>
      <p>
        {item.companyName} {item.businessType} {item.fleetSize} {item.equipmentType} {item.lookingFor} {dayjs(item.lastPurchased).format('MMMM D, YYYY')}
      </p>
    </div>)
    ) : <div>Please log in</div>}
   
  </div>;
}
