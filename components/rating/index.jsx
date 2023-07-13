import React from "react";
import StarIcon from "../icons/StarIcon";

const Rating = ({ gap, width, height, font, rating }) => {
	return (
		<div className={`flex gap-${gap} items-center`}>
			<StarIcon w={width} h={height} />
			<p className={`text-[${font}px]`}>{rating}</p>
		</div>
	);
};

export default Rating;
