import React from "react";
import Vector1 from "../assets/vector1.png";
import Vector2 from "../assets/vector2.png";
import Vector3 from "../assets/vector3.png";
import Vector4 from "../assets/vector4.png";

const Graph = () => {
	return (
		<div className="graph-holder">
			<div className="carbon-container">
				<h1>Carbon</h1>
			</div>
			<div className="graph-container">
				<img  
                    src={Vector1} 
                    alt="green-vector"
                    className="graph-item"

                     />
				<img
					src={Vector2}
					alt="sea-green-vector"
					style={{
						position: "absolute",
						"margin-left": "-810px",
						"margin-top": "12px",
					}}
                    className="graph-item"

				/>
				<img
					src={Vector3}
					alt="blue-vector"
					style={{
						position: "absolute",
						"margin-left": "-780px",
						"margin-top": "30px",
					}}
                    className="graph-item"

				/>
				<img
					src={Vector4}
					alt="pink-vector"
					style={{
						position: "absolute",
						"margin-left": "-810px",
						"margin-top": "53px",
					}}
                    className="graph-item"

				/>
			</div>
		</div>
	);
};

export default Graph;
