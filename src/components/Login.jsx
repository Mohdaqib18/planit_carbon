import React, { useState } from "react";
import { account } from "../appwriteConfig";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import "../../index.css";

const Login = () => {
	const navigate = useNavigate();
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const loginUser = async (e) => {
		e.preventDefault();
		try {
			await account.createEmailSession(user.email, user.password);
			navigate("/home	");
		} catch (error) {
			console.log(error);
		}
	};

	const googleAuth = () => {
		account.createOAuth2Session(
			"google",
			"http://localhost:5173/home",
			"http://localhost:5173/"
		);
	};

	const handleSignup = (e) => {
		e.preventDefault();
		navigate("/signup");
	};

	return (
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
					Log in to your account
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
					style={{ marginTop: "1.5rem" }}
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
							>
								<a
									href="#"
									className="font-semibold text-indigo-600"
									style={{ color: "#4F46E5", fontWeight: "600" }}
								>
									Forgot password?
								</a>
							</div>
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
							onClick={loginUser}
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
							Log in
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
					Don't have an account?{" 	"}
					<a
						href="/signup"
						className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						style={{
							color: "#4F46E5",
							fontWeight: "600",
							lineHeight: "1.5rem",
						}}
					>
						Click here to signup
					</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
