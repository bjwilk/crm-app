import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  // const [companyName, setCompanyName] = useState("");
  // const [businessType, setBusinessType] = useState("");
  // const [fleetSize, setFleetSize] = useState("");
  // const [lastPurchased, setLastPurchased] = useState("");
  // const [lookingFor, setLookingFor] = useState("");
  // const [equipmentType, setEquipmentType] = useState("");
const [bread, showToast] = useState(false)
  const [addressInfo, setAddressInfo] = useState({
    companyName: "",
    firstName: "",
    lastName: "",
    businessType: "",
    equipmentType: "",
    fleetSize: 1,
    lookingFor: "",
    email: "",
    phoneNumber: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zipCode: 0,
  });

  useEffect(() => {
    toast("Company Added!")
  }, [])
  

  const handleChange = (e) => {
    console.log(addressInfo, e.target.name)
    switch (e.target.name) {
      case "firstName":
        setAddressInfo((pre) => ({...pre,  firstName: e.target.value }))
        break;
      case "lastName":
        setAddressInfo((pre) => 
          ({...pre,  lastName: e.target.value })
        )
        break;
        case "companyName":
          setAddressInfo((pre) => 
            ({...pre,  companyName: e.target.value })
          )
          break;
        case "equipmentType":
          setAddressInfo((pre) => 
            ({...pre,  equipmentType: e.target.value })
          )
          break;
      case "email":
        setAddressInfo((pre) => 
          ({...pre,  email: e.target.value })
        )
        break;
        case "businessType":
          setAddressInfo((pre) => 
            ({...pre,  businessType: e.target.value })
          )
          break;
          case "lookingFor":
            setAddressInfo((pre) => 
              ({...pre,  lookingFor: e.target.value })
            )
            break;
            case "fleetSize":
              setAddressInfo((pre) => 
                ({...pre,  fleetSize: e.target.value })
              )
              break;
      case "phoneNumber":
        setAddressInfo((pre) => 
          ({...pre,  phoneNumber: e.target.value })
        )
        break;
      case "address":
        setAddressInfo((pre) => 
          ({...pre,  address: e.target.value })
        )
        break;
      case "address2":
        setAddressInfo((pre) => 
          ({...pre,  address2: e.target.value })
        )
        break;
      case "city":
        setAddressInfo((pre) => 
          ({...pre,  city: e.target.value })
        )
        break;
        case "state":
          setAddressInfo((pre) => 
            ({...pre,  state: e.target.value })
          )
        break;
      case "zipCode":
        setAddressInfo((pre) => 
          ({...pre,  zipCode: e.target.value })
      )
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addressInfo, 'in here')
    fetch('http://localhost:3002/accounts', {
      method:'Post',
      headers:{
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jsonwebtoken')}`
      },
      body: JSON.stringify(addressInfo)
    })
    .then((response) => {
      return response.json()
    })
    .then((results) => {
      showToast(true)
      
      console.log(results)
    })
    .catch(err => {
      console.log(err)
    })
  }


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
    {bread && <ToastContainer />}
       <Profile
            handleSubmit={handleSubmit}
            firstName={addressInfo.firstName}
            handleChange={handleChange}
            lastName={addressInfo.lastName}
            equipmentType={addressInfo.equipmentType}
            companyName={addressInfo.companyName}
            fleetSize={addressInfo.fleetSize}
            lookingFor={addressInfo.lookingFor}
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
