import React from "react";
import Slider from "react-slick";
import NextArrowIcon from "../icons/NextArrowIcon";
import PrevArrowIcon from "../icons/PrevArrowIcon";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = ({ onClick }) => {
	return (
		<button className="absolute top-[43%] left-[-32px] text-dark-600 hover:text-white" onClick={onClick}>
			<PrevArrowIcon />
		</button>
	);
};

const NextArrow = ({ onClick }) => {
	return (
		<button className="absolute top-[43%] right-[-32px] text-dark-600 hover:text-white" onClick={onClick}>
			<NextArrowIcon />
		</button>
	);
};

const settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 5,
	slidesToScroll: 1,
	initialSlide: 0,
	prevArrow: <PrevArrow />,
	nextArrow: <NextArrow />,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		},
	],
};

const SliderComponent = ({ children }) => {
	return (
		<div className="w-full px-4 m-auto">
			<Slider {...settings}>{children}</Slider>
		</div>
	);
};

export default SliderComponent;
