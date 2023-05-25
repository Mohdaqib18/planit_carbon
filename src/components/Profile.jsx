import React, { useEffect, useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate, Link } from "react-router-dom";
import TodoForm from "./TodoForm";
import Todos from "./Todos";

const Profile = () => {
	const navigate = useNavigate();
	const [userDetails, setUserDetails] = useState();

	useEffect(() => {
		const getData = account.get();
		getData.then(
			function (response) {
				setUserDetails(response);
			},
			function (error) {
				console.log(error);
			}
		);
	}, []);

	const handleLogout = async () => {
		try {
			await account.deleteSession("current");
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			{userDetails ? (
				<>
					<div>Hello {userDetails.name}</div>
					<div>
						<button onClick={handleLogout}>Logout</button>
					</div>
					<TodoForm />
					<Todos />
				</>
			) : (
				<>
					<p>Please login to see profile</p>
					<Link to="/">Login</Link>
				</>
			)}
		</>
	);
};

export default Profile;
