import React, { useState } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
  border: solid black 10px;
  margin: 5px;
  padding: 5px;
  background: white;
`;



const Button = styled.button`
  border: solid;
  margin: 15px;
  padding: 5px;
  background: blue;
  color: white;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background: blue;
    transform: scale(1.1);
  }

  &:active {
    background: darkblue;
  }
`;

const P = styled.p`
  font-weight: bold;
`;

const InputWrapper = styled.div`
  border: solid;
  margin: 5px;
  padding: 5px;
  background: lightblue;
`;



const DashBoard = () => {
  const [companyName, setCompanyName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [fleetSize, setFleetSize] = useState("");
  const [lastPurchased, setLastPurchased] = useState("");
  const [lookingFor, setLookingFor] = useState("");
  const [equipmentType, setEquipmentType] = useState("");

  const handleDashBoard = async () => {
    const newAccount = {
      companyName,
      businessType,
      fleetSize,
      lookingFor,
      lastPurchased,
      equipmentType,
    };

    // const formData = new FormData();
    // formData.append("companyName", companyName);
    // formData.append("businessType", businessType.toUpperCase());
    // formData.append("fleetSize", fleetSize.toUpperCase());
    // formData.append("lastPurchased", lastPurchased);
    // formData.append("lookingFor", lookingFor.toLowerCase());
    // formData.append("equipmentType", equipmentType);
    
console.log(newAccount)
   

    const response = await fetch("http://localhost:3002/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
      },
      body: JSON.stringify(newAccount),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("data", data);
      setCompanyName("");
      setBusinessType("");
      setFleetSize(0);
      setLookingFor("");
      setEquipmentType("");
      setLastPurchased("");
      window.alert("Account added successfully!");
    } else {
      window.alert("Something went wrong");

      // Handle error response
      throw new Error("Failed to add account");
    }
  };

 

  return (
    <>
      <InputWrapper>
        <div>
          <P>Company Name</P>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter Info"
          />
        </div>
        <div>
          <P>Business Type</P>
          <input
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="Enter Info"
          />
        </div>
        <div>
          <P>Fleet Size</P>
          <input
            type="number"
            value={fleetSize}
            onChange={(e) => setFleetSize(e.target.value)}
            placeholder="Enter Info"
          />
        </div>
        <div>
          <div>
            <P>Equipment Type</P>
            <input
              type="text"
              value={equipmentType}
              onChange={(e) => setEquipmentType(e.target.value)}
              placeholder="Enter Info"
            />
          </div>

          <P>Looking For</P>
          <input
            type="text"
            value={lookingFor}
            onChange={(e) => setLookingFor(e.target.value)}
            placeholder="Enter Info"
          />
        </div>
        <div>
          <P>Last Purchased</P>
          <input
            type="date"
            value={lastPurchased}
            onChange={(e) => setLastPurchased(e.target.value)}
            placeholder="Enter Info"
          />
        </div>
       
      </InputWrapper>
      <Button onClick={handleDashBoard}>Add Account</Button>
    </>
  );
};

export default DashBoard;
