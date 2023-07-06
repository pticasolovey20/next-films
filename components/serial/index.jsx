import React from "react";
import Image from "next/image";

const Serial = ({ name, poster_path, genres, vote_average, first_air_date }) => {
	const BASE_URL = "https://image.tmdb.org/t/p/original";
	const PATH = `${BASE_URL}${poster_path}`;
	const FALLBACK_IMAGE = "fallback.png";

	const handleImageError = (event) => {
		event.target.onerror = null;
		event.target.src = FALLBACK_IMAGE;
	};

	return (
		<div className="flex h-full flex-col select-none mx-1">
			<Image
				className="flex-1 object-cover cursor-pointer"
				src={PATH}
				alt={name}
				width={350}
				height={525}
				onError={handleImageError}
			/>
			<div className="flex flex-col gap-3 p-4 bg-dark-100">
				<div className="flex flex-col">
					<h3 className="w-full truncate font-semibold text-[18px]">{name}</h3>
					<p className="w-full truncate text-[15px] text-dark-400">{genres?.replace(/,/g, " | ")}</p>
				</div>
				<div className="flex justify-between text-[14px]">
					<div className="flex gap-1 items-center">
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
								fill="currentColor"
							></path>
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
