import React from "react";
import Link from "next/link";
import Image from "next/image";
import Rating from "../rating";

const Movie = ({ id, title, poster_path, genres, vote_average, release_date }) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original";
	const PATH = `${BASE_URL}${poster_path}`;
	const FALLBACK_IMAGE = "/fallback.png";

	return (
		<Link href={`/movies/${id}`} className="flex flex-col select-none mx-1">
			<Image
				className="flex-1 object-cover cursor-pointer"
				src={poster_path === null ? FALLBACK_IMAGE : PATH}
				alt={title}
				width={350}
				height={525}
				loading="lazy"
			/>
			<div className="flex flex-col gap-3 p-4 bg-dark-100">
				<div className="flex flex-col">
					<h3 className="w-full truncate font-semibold text-[18px]">{title}</h3>
					<p className="w-full truncate text-[15px] text-dark-400">{genres?.replace(/,/g, " | ")}</p>
				</div>
				<div className="flex justify-between text-[14px]">
					<Rating gap={2} rating={vote_average} />
					<p>{release_date?.slice(0, 4)}</p>
				</div>
			</div>
		</Link>
	);
};

export default Movie;
