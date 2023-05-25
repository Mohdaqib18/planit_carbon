import React from 'react';
import { motion } from "framer-motion";

const Test = () => {
  return (
		<div>
			<motion.div
				className="box"
				whileHover={{ scale: 1.1 }}
				transition={{ type: "spring", stiffness: 400, damping: 10 }}
			/>
		</div>
	);
}

export default Test