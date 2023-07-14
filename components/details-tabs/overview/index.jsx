import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Overview = () => {
	const { pathname } = useRouter();
	const { movieDetails, serialDetails } = useSelector((state) => state.dataReducer);

	return (
		<div className="flex flex-col gap-6 justify-between">
			<h2 className="text-lg md:text-xl">
				{pathname.includes("/movies/")
					? movieDetails?.overview
					: pathname.includes("/serials/")
					? serialDetails?.overview
					: null}
			</h2>
			<div className="flex gap-8 text-lg">
				<div className="flex flex-col gap-2 text-dark-600">
					<p>Language:</p>
					<p>Genre:</p>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-nowrap gap-2 overflow-hidden">
						{pathname.includes("/movies/")
							? movieDetails?.spoken_languages.map((movie, index) => (
									<p key={index}>
										{movie.name}
										{index < movieDetails.spoken_languages.length - 1 && ","}
									</p>
							  ))
							: pathname.includes("/serials/")
							? serialDetails?.spoken_languages.map((movie, index) => (
									<p key={index}>
										{movie.name}
										{index < serialDetails.spoken_languages.length - 1 && ","}
									</p>
							  ))
							: null}
					</div>
					<div className="flex gap-2">
						{pathname.includes("/movies/")
							? movieDetails?.genres.map((movie, index) => (
									<p key={movie.id}>
										{movie.name}
										{index < movieDetails.genres.length - 1 && ","}
									</p>
							  ))
							: pathname.includes("/serials/")
							? serialDetails?.genres.map((serial, index) => (
									<p key={serial.id}>
										{serial.name}
										{index < serialDetails.genres.length - 1 && ","}
									</p>
							  ))
							: null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
