import React, { useState, useRef } from "react";
import Slider from "react-slick";
import NextArrowIcon from "../icons/NextArrowIcon";
import PrevArrowIcon from "../icons/PrevArrowIcon";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { classNames } from "@/utils";

const SliderComponent = ({ children }) => {
	const [isVisible, setIsVisible] = useState(false);
	const sliderRef = useRef(null);

	const PrevArrow = ({ onClick }) => {
		return (
			<button
				className={classNames(
					!isVisible && "hidden",
					"absolute top-[43%] left-[-32px] text-dark-600",
					"hover:text-white"
				)}
				onClick={onClick}
			>
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
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0 || 15,
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
		afterChange: (currentSlide) => {
			if (currentSlide > settings.initialSlide) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		},
	};

	return (
		<div className="w-full m-auto">
			<Slider {...settings} ref={sliderRef}>
				{children}
			</Slider>
		</div>
	);
};

export default SliderComponent;
