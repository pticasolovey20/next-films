import { useState } from "react";
import { useMedia } from "use-media";
import { useSelector } from "react-redux";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ContentLoader from "react-content-loader";
import Link from "next/link";

import { classNames } from "@/utils";

const SliderComponent = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const { movies, loading } = useSelector((state) => state.dataReducer);

	const BASE_URL = "https://image.tmdb.org/t/p/original";
	const BACK_PATH = `${BASE_URL}${movies[currentSlide]?.backdrop_path}`;
	const POSTER_PATH = `${BASE_URL}${movies[currentSlide]?.poster_path}`;

	const PREV_POSTER_PATH = `${BASE_URL}${
		movies[currentSlide === 0 ? movies?.length - 1 : currentSlide - 1]?.poster_path
	}`;
	const NEXT_POSTER_PATH = `${BASE_URL}${
		movies[currentSlide === movies?.length - 1 ? 0 : currentSlide + 1]?.poster_path
	}`;

	const isWide = useMedia({ minWidth: "590px" });
	const isPicture = useMedia({ minWidth: "920px" });

	const handlePrevSlide = () => {
		setCurrentSlide((prev) => {
			if (prev === 0) {
				return movies.length - 1;
			} else {
				return prev - 1;
			}
		});
	};

	const handleNextSlide = () => {
		setCurrentSlide((prev) => {
			if (prev === movies.length - 1) {
				return 0;
			} else {
				return prev + 1;
			}
		});
	};

	return (
		<div className={classNames("absolute w-full gap-4 bg-dark-400", isWide ? "flex" : "hidden")}>
			<div
				className={classNames(
					"h-[390px] w-[14%]",
					"shadow-md shadow-black/75",
					"bg-dark-300 bg-cover bg-right-top"
				)}
				style={{
					backgroundImage: `url(${PREV_POSTER_PATH})`,
				}}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-dark-100/75" />
				<button
					onClick={handlePrevSlide}
					className={classNames(
						"absolute top-[43%] text-dark-600",
						isPicture ? "left-[10%]" : "left-[50px]",
						"hover:text-white"
					)}
				>
					<svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
							fill="currentColor"
							fillRule="evenodd"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
			</div>

			<div
				className={classNames(
					"relative h-[390px] flex-1",
					"shadow-md shadow-black/75",
					"bg-dark-300 bg-cover bg-center"
				)}
				style={{ backgroundImage: `url(${BACK_PATH})`, backdropFilter: "blur(3px)" }}
			>
				<div className="absolute top-0 left-0 w-full h-full bg-dark-100/50" />
				<div className="absolute inset-0" style={{ backdropFilter: "blur(3px)" }}>
					<div className="absolute inset-0 flex justify-between select-none">
						<div className="flex flex-col gap-8 p-4">
							<div>
								<div className="flex items-center gap-4">
									<Link href="#" className="text-[28px]">
										{movies[currentSlide]?.title}
									</Link>
									<p className="mt-3 text-dark-600">
										{movies[currentSlide]?.release_date?.slice(0, 4)}
									</p>
								</div>
								<p className="text-[17px] text-dark-600">{movies[currentSlide]?.title}</p>
							</div>
							<ul className="flex gap-2 text-[14px]">
								{movies[currentSlide]?.genres?.replace(/,/g, " | ")}
							</ul>
							<div className="flex items-end gap-4">
								<div className="h-[100px] aspect-square">
									<CircularProgressbar
										value={
											movies[currentSlide]?.vote_average &&
											movies[currentSlide]?.vote_average * 10
										}
										text={movies[currentSlide]?.vote_average && movies[currentSlide]?.vote_average}
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
											{movies[currentSlide]?.vote_average && movies[currentSlide]?.vote_average}
										</p>
										<div className="flex gap-[2px] cursor-pointer">
											{Array.from({ length: 10 }).map((_, index) => {
												const filled = index < Math.floor(movies[currentSlide]?.vote_average);

												return (
													<svg
														key={index}
														width="20"
														height="20"
														viewBox="0 0 15 15"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
															fill={filled ? "#ebbd34" : "white"}
														></path>
													</svg>
												);
											})}
										</div>
									</div>
									<p>Comments: {null}</p>
									<p>Country: {null}</p>
								</div>
							</div>
						</div>

						{loading ? (
							<ContentLoader
								speed={3}
								width="260"
								height="100%"
								backgroundColor="#262529"
								foregroundColor="#1F1E21"
								className="p-4"
							>
								<rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
							</ContentLoader>
						) : (
							<Link
								href="#"
								className={classNames(
									"w-[230px] m-4 overflow-hidden shadow-md shadow-black",
									!isPicture && "hidden"
								)}
							>
								<img className="h-full object-cover bg-dark-300" src={POSTER_PATH} alt="movie" />
							</Link>
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
					backgroundImage: `url(${NEXT_POSTER_PATH})`,
				}}
			>
				<button
					onClick={handleNextSlide}
					className={classNames(
						"absolute top-[43%] text-dark-600",
						isPicture ? "right-[10%]" : "right-[50px]",
						"hover:text-white"
					)}
				>
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
		</div>
	);
};

export default SliderComponent;
