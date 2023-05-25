import React, { useState, useEffect } from "react";
import { account } from "../appwriteConfig";
import Logo from "../assets/logo.png";
import FAQs from "./FAQs";
import Graph from "./Graph";
import GraphLinks from "./GraphLinks";
import { Link, useNavigate } from "react-router-dom";
import {
	easeIn,
	easeInOut,
	easeOut,
	motion,
	reverseEasing,
} from "framer-motion";

const HomePage = () => {
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
			navigate("/home");
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="homepage-container">
			<p
				style={{
					position: "absolute",
					color: "white",
					"margin-left": "1200px",
					"margin-top": "250px",
				}}
			>
				<span style={{ fontSize: "10px" }}>⚪</span> Not all carbon is the same
			</p>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Link to="/home">
					<img className="homepage-logo" src={Logo} alt="logo" />
				</Link>
				<div>
					{userDetails ? (
						<div style={{ display: "flex", justifyContent: "center" }}>
							<div
								style={{
									color: "white",
									fontFamily: "Montserrat",
									fontSize: "20px",
									fontWeight: "500",
									marginTop: "63px",
									marginRight: "15px",
								}}
							>
								Welcome {userDetails.name} !
							</div>
							<div>
								<button onClick={handleLogout} className="login-btn">
									Logout
								</button>
							</div>
						</div>
					) : (
						<>
							<Link to="/login">
								<button className="login-btn">Login</button>
							</Link>
							<Link to="/signup">
								<button className="login-btn">Sign up</button>
							</Link>
						</>
					)}
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, x: 100 }}
				transition={{ ease: easeIn }}
			>
				<FAQs />
			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ ease: easeIn }}
			>
				<Graph />
			</motion.div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, x: 100 }}
				transition={{ ease: easeIn }}
			>
				<GraphLinks />
			</motion.div>
		</div>
	);
};

export default HomePage;
