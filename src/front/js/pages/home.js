import React, { useContext } from "react";
import { useNavigate } from 'react-router-dom'; // <-- import useNavigate
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const navigate = useNavigate();  
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<button onClick={() => navigate('/login')}>Login</button> 
			<button onClick={() => navigate('/signup')}>Signup</button>
			<h1>Hello Rigo!!</h1>
			<p>
			
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
				
			</p>
			
			  
		</div>
	);
};
