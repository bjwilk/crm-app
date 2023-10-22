import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";

export default function AccountProfile() {
  const { id } = useParams();
  const [account, setAccount] = useState({});
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

  const fetchAccounts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/accounts/company/${id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
          },
        }
      );
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {account && (
        <div>
          {account.companyName} {account.businessType}
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
        </div>
      )}
    </div>
  );
}
