import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./test";

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

  const [addressInfo, setAddressInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    address2: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    switch (e.target.name) {
      case "firstName":
        setAddressInfo({ ...addressInfo, firstName: e.target.value });
        break;
      case "lastName":
        setAddressInfo({ ...addressInfo, lastName: e.target.value });
        break;
      case "email":
        setAddressInfo({ ...addressInfo, email: e.target.value });
        break;
      case "phoneNumber":
        setAddressInfo({ ...addressInfo, phoneNumber: e.target.value });
        break;
      case "address":
        setAddressInfo({ ...addressInfo, address: e.target.value });
        break;
      case "address2":
        setAddressInfo({ ...addressInfo, address2: e.target.value });
        break;
      case "city":
        setAddressInfo({ ...addressInfo, city: e.target.value });
        break;
      case "zipCode":
        setAddressInfo({ ...addressInfo, zipCode: e.target.value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


//   const handleDashBoard = async () => {
//     const newAccount = {
//       companyName,
//       businessType,
//       fleetSize,
//       lookingFor,
//       lastPurchased,
//       equipmentType,
//     };

//     const formData = new FormData();
//     formData.append("companyName", companyName);
//     formData.append("businessType", businessType.toUpperCase());
//     formData.append("fleetSize", fleetSize.toUpperCase());
//     formData.append("lastPurchased", lastPurchased);
//     formData.append("lookingFor", lookingFor.toLowerCase());
//     formData.append("equipmentType", equipmentType);
    
// console.log(newAccount)
   

//     const response = await fetch("http://localhost:3002/accounts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
//       },
//       body: JSON.stringify(newAccount),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("data", data);
//       setCompanyName("");
//       setBusinessType("");
//       setFleetSize(0);
//       setLookingFor("");
//       setEquipmentType("");
//       setLastPurchased("");
//       window.alert("Account added successfully!");
//     } else {
//       window.alert("Something went wrong");

//       // Handle error response
//       throw new Error("Failed to add account");
//     }
//   };

 

  return (
    <>
       <Profile
            handleSubmit={handleSubmit}
            firstName={addressInfo.firstName}
            handleChange={handleChange}
            lastName={addressInfo.lastName}
            email={addressInfo.email}
            phoneNumber={addressInfo.phoneNumber}
            address={addressInfo.address}
            address2={addressInfo.address2}
            city={addressInfo.city}
            zipCode={addressInfo.zipCode}
          />
    </>
  );
};

export default DashBoard;
