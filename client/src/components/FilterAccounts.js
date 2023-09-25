import React, { useEffect, useState, useContext } from "react";
import { AccountContext } from "../App";

function FilterAccounts() {
    const [account, setAccount] = useContext(AccountContext)

  const [equipmentType, setequipmentType] = useState([]);
  const [equipment, setEquipment] = useState("")

  const fetchAccounts = async (equipment) => {
    try {
      const response = await fetch(`http://localhost:3002/accounts/equipmentType/${equipment}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
        },
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

  const fetchEquipment = () => {
    fetch("http://localhost:3002/accounts/equipmentType", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((equipment) => {
        console.log(equipment);
        setequipmentType(equipment);
      });
  };
  useEffect(() => {
    fetchEquipment();
  }, []);

const handleSelect = (e) => {
    console.log(e.target.value, "value")
    fetchAccounts(e.target.value)

}

  return (
    <div className="container">
      <h3>Search by Equipment Type</h3>
      <select className="form-select" aria-label="Default select example" value={equipment} onChange={handleSelect}>
        <option selected>Open this select menu</option>
        <option value="Dump Truck">Dump Truck</option>
        <option value="Flatbed">Flatbed</option>
        <option value="Water Truck">Water Truck</option>
        <option value="Box Truck">Box Truck</option>
        <option value="Day Cab">Day Cab</option>
        <option value="Sleeper">Sleeper</option>
        <option value="Service Truck">Service Truck</option>
      </select>
    </div>
  );
}

export default FilterAccounts;
