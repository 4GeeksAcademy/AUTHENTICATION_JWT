import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Private from "./private";
import { Login } from "./login";

const PrivateCheck = () => {
  const navigate = useNavigate();
  const [autorise, setAutorize] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect started");  

    const token = localStorage.getItem("token");

    if (!token) {
      console.log("No token found"); 
      setAutorize(false);
      setLoading(false);
      navigate("/login");
      return;
    }

    console.log("Token found, validating...");  

    fetch("https://ominous-fishstick-r6vgwgw6rg9f5gw-3001.app.github.dev/api/validate-token", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log("Validation response:", data);  
      if (data.msg === "Token is valid") {
        setAutorize(true);
      }else {
      localStorage.removeItem("token");  // Remove the expired token
      navigate("/login"); 
      //setLoading(false);
      }
    })
    .catch(error => {
      console.log("Token validation failed:", error);  
      setLoading(false);
    });

  }, []);

  return (
    <div>
      {autorise ? <Private /> : <Login />}
    </div>
  );
};

export default PrivateCheck;
