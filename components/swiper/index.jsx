import Slider from "react-slick";
import Movie from "../movie";

import { classNames } from "@/utils";

const SwiperComponent = ({ tvSeries }) => {
	const settings = {
		arrows: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
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

	return (
		<div className="relative">
			<button className={classNames("absolute top-[43%] left-[10%] text-dark-600", "hover:text-white")}>
				<svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
						fill="currentColor"
						fillRule="evenodd"
						clipRule="evenodd"
					></path>
				</svg>
			</button>
			<Slider {...settings}>{tvSeries?.length && tvSeries.map((tv) => <Movie key={tv.id} {...tv} />)}</Slider>
			<button className={classNames("absolute top-[43%] right-[10%] text-dark-600", "hover:text-white")}>
				<svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
						fill="currentColor"
						fillRule="evenodd"
						clipRule="evenodd"
					></path>
				</svg>
			</button>
		</div>
	);
};

export default SwiperComponent;
