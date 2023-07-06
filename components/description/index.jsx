import React from "react";
import Link from "next/link";

const Description = () => {
	return (
		<div className="w-full flex flex-col 2xl:flex-row py-8 select-none">
			<div className="w-full 2xl:w-3/5 flex flex-col gap-4 p-4 text-dark-600">
				<h2 className="text-white text-2xl font-semibold">
					Website with the best movies and TV series NextFILMS
				</h2>
				<p>
					After a hard day&lsquo;s work, do you want to relax and watch a good movie alone or in the company
					of or with your friends? Then be sure to check out the best world and domestic films that are
					presented on the project.
				</p>
				<p>
					The best movies and TV series take your breath away from the first second of watching and transport
					the viewer into the world of the world of{" "}
					<Link href="/" className="text-white font-semibold">
						adventure
					</Link>
					,{" "}
					<Link href="/" className="text-white font-semibold">
						fantasy
					</Link>{" "}
					and{" "}
					<Link href="/" className="text-white font-semibold">
						romance
					</Link>
					. Everything added is selected according to international ratings, so we provide our visitors with
					only high-quality and interesting movies. The website with MIXFILM movies is a unique opportunity to
					plunge into the universe of excellent and exciting cinematic masterpieces.
				</p>
				<p>
					Here you will find only the most popular and best movies online without ads, belonging to different
					genres. And for kids, you can find good and{" "}
					<Link href="/" className="text-white font-semibold">
						beautiful cartoons
					</Link>{" "}
					on the site. For enjoy your favorite{" "}
					<Link href="/" className="text-white font-semibold">
						TV series
					</Link>{" "}
					or a famous{" "}
					<Link href="/" className="text-white font-semibold">
						movie
					</Link>
					, you just need to visit our movie site and use the convenient filter to find the desired video. If
					you have not decided what movie to watch at your leisure, check out the &quot;Popular&quot; or
					recently released movie sections and choose the one that suits you.
				</p>
				<p>
					Do you dream of watching the best movies and TV shows in high quality and without registration? Then
					try to experience unforgettable emotions with us at a mix movie.
				</p>
			</div>
			<div className="2xl:w-2/5 flex justify-center items-center">
				<p className="text-[60px] font-bold">NextFILMS</p>
			</div>
		</div>
	);
};

export default Description;
