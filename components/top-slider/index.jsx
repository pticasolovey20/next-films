import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import PrevArrowIcon from "../icons/PrevArrowIcon";
import NextArrowIcon from "../icons/NextArrowIcon";
import StarIcon from "../icons/StarIcon";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SkeletonComponent from "../skeleton";
import Image from "next/image";
import Link from "next/link";

import { classNames } from "@/utils";

const TopSliderComponent = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { movies } = useSelector((state) => state.dataReducer);

	const films = movies.movies;

	const { matches: posterVis } = useMediaQuery("min-width", 920);
	const { matches: caruselVis } = useMediaQuery("min-width", 590);

	// variables paths to the poster

	const BASE_URL = "https://image.tmdb.org/t/p/original";
	const BACK_PATH = `${BASE_URL}${films?.[currentSlide]?.backdrop_path}`;
	const POSTER_PATH = `${BASE_URL}${films?.[currentSlide]?.poster_path}`;
	const PREV = `${BASE_URL}${films?.[currentSlide === 0 ? films?.length - 1 : currentSlide - 1]?.poster_path}`;
	const NEXT = `${BASE_URL}${films?.[currentSlide === films?.length - 1 ? 0 : currentSlide + 1]?.poster_path}`;

	const handlePrevSlide = () => setCurrentSlide((prev) => (prev === 0 ? films?.length - 1 : prev - 1));
	const handleNextSlide = () => setCurrentSlide((prev) => (prev === films?.length ? 0 : prev + 1));

	return (
		<div className={classNames("mt-20 absolute w-full gap-4 bg-dark-400", caruselVis ? "flex" : "hidden")}>
			<div
				className={classNames(
					"h-[390px] w-[14%]",
					"shadow-md shadow-black/75",
					"bg-dark-300 bg-cover bg-right-top"
				)}
				style={{
					backgroundImage: `url(${films?.[currentSlide]?.poster_path ? PREV : ""})`,
				}}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-dark-100/75" />
				<button
					onClick={handlePrevSlide}
					className={classNames(
						"absolute top-[43%] text-dark-600",
						posterVis ? "left-[10%]" : "left-[50px]",
						"hover:text-white"
					)}
				>
					<PrevArrowIcon />
				</button>
			</div>

			<div
				className={classNames(
					"relative h-[390px] flex-1",
					"shadow-md shadow-black/75",
					"bg-dark-300 bg-cover bg-center"
				)}
				style={{
					backgroundImage: `url(${films?.[currentSlide]?.backdrop_path ? BACK_PATH : ""})`,
					backdropFilter: "blur(3px)",
				}}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-dark-100/50" />
				<div className="absolute inset-0" style={{ backdropFilter: "blur(3px)" }}>
					<div className="absolute inset-0 flex justify-between select-none">
						<div className="flex flex-col gap-8 p-4">
							<div>
								<div className="flex items-center gap-4">
									<Link href={`/movies/${films?.[currentSlide]?.id}`} className="text-[28px]">
										{films?.[currentSlide]?.title}
									</Link>
									<p className="mt-3 text-dark-600">
										{films?.[currentSlide]?.release_date?.slice(0, 4)}
									</p>
								</div>
								<p className="text-[17px] text-dark-600">{films?.[currentSlide]?.title}</p>
							</div>
							<ul className="flex gap-2 text-[14px]">
								{films?.[currentSlide]?.genres?.replace(/,/g, " | ")}
							</ul>
							{films?.[currentSlide] && (
								<div className="flex items-end gap-4">
									<div className="h-[100px] aspect-square">
										<CircularProgressbar
											value={
												films?.[currentSlide]?.vote_average &&
												films?.[currentSlide]?.vote_average * 10
											}
											text={
												films?.[currentSlide]?.vote_average &&
												films?.[currentSlide]?.vote_average
											}
											strokeWidth={7}
											styles={buildStyles({
												strokeLinecap: "butt",
												pathColor: "white",
												textColor: "white",
												trailColor: "#525252",
											})}
										/>
									</div>
									<div className="flex flex-col gap-1 text-[14px]">
										<div className="flex flex-col items-start gap-2">
											<p>
												Rating IMDb:{" "}
												{films?.[currentSlide]?.vote_average &&
													films?.[currentSlide]?.vote_average}
											</p>
											<div className="flex gap-[2px] cursor-pointer">
												{Array.from({ length: 10 }).map((_, index) => {
													const filled =
														index < Math.floor(films?.[currentSlide]?.vote_average);

													return <StarIcon key={index} w={20} h={20} fill={filled} />;
												})}
											</div>
										</div>
										<p>Comments: {null}</p>
										<p>Country: {null}</p>
									</div>
								</div>
							)}
						</div>

						{films?.[currentSlide]?.poster_path ? (
							<Link
								href={`/movies/${films?.[currentSlide]?.id}`}
								className={classNames(
									"w-[230px] m-4 overflow-hidden shadow-md shadow-black",
									!posterVis && "hidden"
								)}
							>
								<Image
									className="h-full object-cover bg-dark-300"
									src={POSTER_PATH}
									alt="movie"
									width={300}
									height={300}
								/>
							</Link>
						) : (
							<SkeletonComponent styles="w-[260px] p-4" />
						)}
					</div>
				</div>
			</div>

			<div
				className={classNames(
					"h-[390px] w-[14%]",
					"shadow-md shadow-black/75",
					"bg-dark-300 bg-cover bg-left-top"
				)}
				style={{
					backgroundImage: `url(${films?.[currentSlide]?.poster_path ? NEXT : ""})`,
				}}
			>
				<button
					onClick={handleNextSlide}
					className={classNames(
						"absolute top-[43%] text-dark-600",
						posterVis ? "right-[10%]" : "right-[50px]",
						"hover:text-white"
					)}
				>
					<NextArrowIcon />
				</button>
			</div>
		</div>
	);
};

export default TopSliderComponent;
