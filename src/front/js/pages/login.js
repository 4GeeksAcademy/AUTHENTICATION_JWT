import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const [username, setUsername] = useState(""); // 
	const [password, setPassword] = useState(""); 
	const navigate = useNavigate ()

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

		fetch("https://ominous-fishstick-r6vgwgw6rg9f5gw-3001.app.github.dev/api/token", opts)

			.then(resp => {
				if (resp.status === 200) return resp.json();
				else alert("Wrong user or password!");
			})
			.then(data => {
				
				console.log(data); localStorage.setItem("token", data.token);
				navigate ("/private")
			})
			
	};

	return (
		<div className="text-center">
			<h1>Login</h1>
			<div>
				<input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} /> 
				<input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} /> 
				<button onClick={handleClick}>Login</button>
				<button onClick={() => navigate('/signup')}>Sign up</button>
				<button onClick={() => navigate('/')}>Home page</button>
			</div>
		</div>
	);
};