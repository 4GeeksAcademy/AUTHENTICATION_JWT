import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    fetch("https://ominous-fishstick-r6vgwgw6rg9f5gw-3001.app.github.dev/api/signup", opts)
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("Error.");
      })
      .then((data) => {
        console.log(data);
       
        navigate("/login"); 
      })
    };

  return (
    <div className="text-center">
      <h1>Sign Up</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleClick}>Sign Up</button>
        <button onClick={() => navigate('/')}>Home page</button>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    </div>
  );
};