import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export function Rate() {
const [rate, setRate] = useState(0);
return (
    <div className='star-rating'>
	{[...Array(5)].map((item, index) => {
		const givenRating = index + 1;
		return (
		<label>
			<input
			type="radio"
            name="rating"
			value={givenRating}
			onClick={() => {
				setRate(givenRating);
				alert(`Are you sure you want to give ${givenRating} stars ?`);
			}}
			/>
			<FaStar
				color={
				givenRating < rate || givenRating === rate
					? "rgba(255, 255, 0, 0.9)"
					: "#d1d5bc"
				}
			/>
		</label>
		);
	})}
    </div>
);
};

