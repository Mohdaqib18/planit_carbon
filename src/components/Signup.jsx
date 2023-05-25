import React, { useState } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Logo from "../assets/logo.png";
import "../../index.css";

const Signup = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	});

	//Signup
	const sigupUser = async (e) => {
		e.preventDefault();
		const promise = account.create(
			uuidv4(),
			user.email,
			user.password,
			user.name
		);

		promise.then(
			function (response) {
				console.log(response);
				navigate("/home");
			},

			function (error) {
				console.log(error);
			}
		);
	};

	return (
		// <div>
		// 	<label htmlFor="name">Name</label>
		// 	<input
		// 		id="name"
		// 		name="name"
		// 		type="text"
		// 		required
		// 		onChange={(e) => setUser({ ...user, name: e.target.value })}
		// 	/>
		// 	<label htmlFor="email">Email</label>
		// 	<input
		// 		id="email"
		// 		name="email"
		// 		type="text"
		// 		required
		// 		onChange={(e) => setUser({ ...user, email: e.target.value })}
		// 	/>
		// 	<label htmlFor="password">Password</label>
		// 	<input
		// 		id="password"
		// 		name="password"
		// 		type="text"
		// 		required
		// 		onChange={(e) => setUser({ ...user, password: e.target.value })}
		// 	/>
		// 	<div>
		// 		<button type="submit" onClick={sigupUser}>
		// 			Sign Up
		// 		</button>
		// 	</div>
		// </div>

		<div
			className=" flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
			style={{
				height: "100vh",
				background: "black",
				display: "flex",
				paddingLeft: "1.5rem",
				paddingRight: "1.5rem",
				paddingTop: "3rem",
				paddingBottom: "3rem",
				flexDirection: "column",
				flex: "1 1 0%",
				justifyContent: "center",
				minHeight: "100%",
			}}
		>
			<div>
				<img
					className="mx-auto h-10 w-auto"
					style={{
						marginLeft: "630px",
						marginRight: "auto",
						width: "auto",
						height: "2.5rem",
					}}
					src={Logo}
					alt="Your Company"
				/>
				<h2
					className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white"
					style={{
						marginTop: "2.5rem",
						color: "#ffffff",
						fontSize: "1.5rem",
						lineHeight: "2rem",
						fontWeight: "700",
						letterSpacing: "-0.025em",
						lineHeight: "2.25rem",
						textAlign: "center",
					}}
				>
					Sign up
				</h2>
			</div>

			<div
				className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"
				style={{
					marginTop: "2.5rem",
					marginLeft: "auto",
					marginRight: "auto",
					width: "100%",
					maxWidth: "24rem",
				}}
			>
				<form
					className="space-y-6"
					action="#"
					method="POST"
				>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-white"
							style={{
								display: "block",
								color: "#ffffff",
								fontSize: "0.875rem",
								lineHeight: "1.25rem",
								fontWeight: "500",
								lineHeight: "1.5rem",
							}}
						>
							Name
						</label>
						<div className="mt-2" style={{ marginTop: "0.5rem" }}>
							<input
								id="name"
								name="name"
								type="name"
								autoComplete="name"
								onChange={(e) => setUser({ ...user, name: e.target.value })}
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900  sm:text-sm sm:leading-6"
								style={{
									display: "block",
									paddingTop: "0.375rem",
									paddingBottom: "0.375rem",
									color: "#111827",
									width: "100%",
									borderRadius: "0.375rem",
									borderWidth: "0",
									fontSize: ".875rem",
									lineHeight: "1.25rem",
									marginBottom:"10px"
								}}
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-white"
							style={{
								display: "block",
								color: "#ffffff",
								fontSize: "0.875rem",
								lineHeight: "1.25rem",
								fontWeight: "500",
								lineHeight: "1.5rem",
							}}
						>
							Email address
						</label>
						<div className="mt-2" style={{ marginTop: "0.5rem" }}>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								onChange={(e) => setUser({ ...user, email: e.target.value })}
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900  sm:text-sm sm:leading-6"
								style={{
									display: "block",
									paddingTop: "0.375rem",
									paddingBottom: "0.375rem",
									color: "#111827",
									width: "100%",
									borderRadius: "0.375rem",
									borderWidth: "0",
									fontSize: ".875rem",
									lineHeight: "1.25rem",
								}}
							/>
						</div>
					</div>

					<div>
						<div
							className="flex items-center justify-between"
							style={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
							}}
						>
							<label
								htmlFor="password"
								style={{
									display: "block",
									color: "#ffffff",
									fontSize: "0.875rem",
									lineHeight: "1.25rem",
									fontWeight: "500",
									lineHeight: "1.5rem",
									marginTop: "10px",
								}}
								className="block text-sm font-medium leading-6 text-white"
							>
								Password
							</label>
							<div
								className="text-sm"
								style={{ fontSize: "0.875rem", lineHeight: "1.25rem" }}
							></div>
						</div>
						<div className="mt-2" style={{ marginTop: "0.5rem" }}>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								onChange={(e) => setUser({ ...user, password: e.target.value })}
								required
								className="block w-full rounded-md border-0 py-1.5 text-gray-900  sm:text-sm sm:leading-6"
								style={{
									display: "block",
									paddingTop: "0.375rem",
									paddingBottom: "0.375rem",
									color: "#111827",
									width: "100%",
									borderRadius: "0.375rem",
									borderWidth: "0",
									fontSize: ".875rem",
									lineHeight: "1.25rem",
									lineHeight: "1.5rem",
									marginBottom: "20px",
								}}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							onClick={sigupUser}
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white"
							style={{
								display: "flex",
								paddingTop: "0.375rem",
								paddingBottom: "0.375rem",
								paddingLeft: "0.75rem",
								paddingRight: "0.75rem",
								backgroundColor: "#4F46E5",
								color: "#ffffff",
								fontSize: "0.875rem",
								lineHeight: "1.25rem",
								fontWeight: "600",
								lineHeight: "1.5rem",
								justifyContent: "center",
								width: "100%",
								borderRadius: "0.375rem",
							}}
						>
							Sign up
						</button>
					</div>
				</form>

				<p
					className="mt-10 text-center text-sm text-white"
					style={{
						marginTop: "2.5rem",
						color: "#ffffff",
						fontSize: "0.875rem",
						lineHeight: "1.25rem",
						textAlign: "center",
					}}
				>
					Already have an account?{" 	"}
					<a
						href="/login"
						className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						style={{
							color: "#4F46E5",
							fontWeight: "600",
							lineHeight: "1.5rem",
						}}
					>
						Click here to login
					</a>
				</p>
			</div>
		</div>
	);
};

export default Signup;

