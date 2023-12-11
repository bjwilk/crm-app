import React, { useEffect, useState, useContext } from "react";
import { AccountContext } from "../App";

function FilterAccounts({dataEquipment}) {
    const [account, setAccount] = useContext(AccountContext)

  const [equipmentType, setequipmentType] = useState([]);
  const [equipment, setEquipment] = useState("")

  const [businessType, setBusinessType] = useState([]);
  const [bussiness, setBusiness] = useState("")

  const [companyNameType, setCompanyNameType] = useState([]);
  const [companyName, setCompanyName] = useState("")

  const [lookingForType, setLookingForType] = useState([]);
  const [lookingFor, setLookingFor] = useState("")


  const fetchAccounts = async (selection) => {
    let urlRoute;
    if(selection ==="Dump Trucks" || selection === "Flatbed" || selection === "Water Truck" || selection === "Box Truck" || selection === "Day Cab" || selection === "Sleeper" || selection === "Service Truck") {
      urlRoute = `http://localhost:3002/accounts/equipmentType/${selection}`
    } else if (selection ==="Construction" || selection === "Moving" || selection === "Delivery" || selection === "Freight Hauling" || selection === "Landscaping"){
      urlRoute = `http://localhost:3002/accounts/businessType/${selection}`
    } else if(companyName !== null){
      urlRoute = `http://localhost:3002/accounts/companyName/${selection}`
    } else if(selection ==="Construction" || selection === "Moving" || selection === "Delivery" || selection === "Freight Hauling" || selection === "Landscaping"){
      urlRoute = `http://localhost:3002/accounts/lookingFor/${selection}`

    }

    // const equipmentUrl = `http://localhost:3002/accounts/equipmentType/${equipment}`
    // const businessUrl = `http://localhost:3002/accounts/businessType/${bussiness}`

    try {
     const response = await fetch(urlRoute, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
        },
      });

  

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setAccount(data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchEquipment = async () => {
    const equipmentUrl = `http://localhost:3002/accounts/equipmentType/`
    const businessUrl = `http://localhost:3002/accounts/businessType/`
    const companyNameUrl = `http://localhost:3002/accounts/companyName/`
    const lookingForUrl = `http://localhost:3002/accounts/lookingFor/`

    try {
      const [responseEquipment, responseBusiness, responseCompanyName, responseLookingFor] = await Promise.all([
        fetch(equipmentUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
          },
        }),
        fetch(businessUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
          },
        }),
        fetch(companyNameUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
          },
        }),
        fetch(lookingForUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jsonwebtoken")}`,
          },
        })
    ])


      if(responseEquipment.ok && responseBusiness.ok && responseCompanyName.ok) {
        const equipmentData = await responseEquipment.json() 
        const businessData = await responseBusiness.json()
        const companyNameData = await responseCompanyName.json()
        const lookingForData = await responseLookingFor.json()

        setBusiness(businessData)
        setEquipment(equipmentData)
        setCompanyName(companyNameData)
        setLookingFor(lookingForData)
       
    }

   
    } catch (error) {
      console.error("Error fetching data:", error);
    }


  };

  useEffect(() => {
    fetchEquipment();
    console.log(dataEquipment)
  }, []);

const handleSelect = (e) => {
  console.log('in handle select',e.target.value)
if(e.target.name === 'companyName'){
  setCompanyName(e.target.value)
  return
}
    fetchAccounts(e.target.value)


}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(companyName)
  fetchAccounts(companyName)
}

  return (
    <div className="container">
      <div className="filter-cards">
      <h3>Search by Equipment Type</h3>
      <select className="form-select" aria-label="Default select example" value={equipment} onChange={handleSelect}>
        <option selected>Open this select menu</option>
        <option value="Dump Trucks">Dump Truck</option>
        <option value="Flatbed">Flatbed</option>
        <option value="Water Truck">Water Truck</option>
        <option value="Box Truck">Box Truck</option>
        <option value="Day Cab">Day Cab</option>
        <option value="Sleeper">Sleeper</option>
        <option value="Service Truck">Service Truck</option>
      </select>
      </div>
     <div className="filter-cards">
     <h3>Search by Business Type</h3>
      <select className="form-select" aria-label="Default select example" value={bussiness} onChange={handleSelect}>
        <option selected>Open this select menu</option>
        <option value="Construction">Construction</option>
        <option value="Moving">Moving</option>
        <option value="Delivery">Delivery</option>
        <option value="Freight Hauling">Freight Hauling</option>
        <option value="Landscaping">Landscaping</option>
      </select>

     </div>
     <div className="filter-cards">

     <h3>Search by Company Name</h3>
     <form onSubmit={handleSubmit}>
      <input className="form-input" aria-label="Default company name" value={companyName} onChange={handleSelect} type="text" name="companyName"/>
      <button type="submit" >Search</button>
      </form>
     </div>
     <div className="filter-cards">
      <h3>Search by Looking For</h3>
      <select className="form-select" aria-label="Default select example" value={lookingFor} onChange={handleSelect}>
        <option selected>Open this select menu</option>
        <option value="Dump Trucks">Dump Truck</option>
        <option value="Flatbed">Flatbed</option>
        <option value="Water Truck">Water Truck</option>
        <option value="Box Truck">Box Truck</option>
        <option value="Day Cab">Day Cab</option>
        <option value="Sleeper">Sleeper</option>
        <option value="Service Truck">Service Truck</option>
      </select>
      </div>
    </div>
  );
}

export default FilterAccounts;
