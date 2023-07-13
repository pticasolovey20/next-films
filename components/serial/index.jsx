import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "../rating";

const Serial = ({ id, name, poster_path, genres, vote_average, first_air_date }) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original";
	const PATH = `${BASE_URL}${poster_path}`;
	const FALLBACK_IMAGE = "/fallback.png";

	return (
		<Link href={`/serials/${id}`} className="flex h-full flex-col select-none mx-1">
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
					<Rating rating={vote_average} />
					<p>{first_air_date?.slice(0, 4)}</p>
				</div>
			</div>
		</Link>
	);
};

export default Serial;
