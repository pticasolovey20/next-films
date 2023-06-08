const Movie = ({ image, fullTitle, title, imDbRating, genres, description }) => {
	return (
		<div className="flex flex-col">
			<img className="flex-1 object-cover cursor-pointer" src={image} alt={fullTitle} />
			<div className="flex flex-col gap-3 p-4 bg-dark-100">
				<div className="flex flex-col">
					<h3 className="w-full truncate font-semibold text-[18px]">{title}</h3>
					<p className="w-full truncate text-[15px] text-dark-400">{genres.replace(/,/g, " |")}</p>
				</div>
				<div className="flex justify-between text-[14px]">
					<div className="flex gap-1 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="white"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
							/>
						</svg>
						<p>{imDbRating}</p>
					</div>
					<p className="">{description.replace(/\D/g, "")}</p>
				</div>
			</div>
		</div>
	);
};

export default Movie;
