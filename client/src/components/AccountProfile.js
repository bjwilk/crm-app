import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function AccountProfile() {
const { id } = useParams()
const [account, setAccount] = useState({})

const fetchAccounts = async () => {
    try {
      const response = await fetch(`http://localhost:3002/accounts/company/${id}`, {
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
  fetchAccounts()

}, [])


  return (
    <div>
        {account && (
            <div>
                {account.companyName} {account.businessType}
            </div>

        )}
    </div>
  )
}
