import React from "react";
import Image from "next/image";
import StarIcon from "../icons/StarIcon";

const Serial = ({ name, poster_path, genres, vote_average, first_air_date }) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original";
	const PATH = `${BASE_URL}${poster_path}`;
	const FALLBACK_IMAGE = "/fallback.png";

	return (
		<div className="flex h-full flex-col select-none mx-1">
			<Image
				className="flex-1 object-cover cursor-pointer"
				src={poster_path === null ? FALLBACK_IMAGE : PATH}
				alt={name}
				width={350}
				height={525}
				loading="lazy"
			/>
			<div className="flex flex-col gap-3 p-4 bg-dark-100">
				<div className="flex flex-col">
					<h3 className="w-full truncate font-semibold text-[18px]">{name}</h3>
					<p className="w-full truncate text-[15px] text-dark-400">{genres?.replace(/,/g, " | ")}</p>
				</div>
				<div className="flex justify-between text-[14px]">
					<div className="flex gap-1 items-center">
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<StarIcon />
						</svg>
						<p>{vote_average}</p>
					</div>
					<p>{first_air_date?.slice(0, 4)}</p>
				</div>
			</div>
		</div>
	);
};

export default Serial;
