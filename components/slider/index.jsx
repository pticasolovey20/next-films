import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { classNames } from "@/utils";

const def = "h-[390px] bg-dark-100 shadow-sm shadow-black/75";
const genres = ["Genre 1 |", "Genre 2 |", "Genre 3 |", "Genre 4 |", "Genre 5"];
const rating = 74;

const SliderComponent = () => {
	return (
		<div className="absolute w-full grid grid-cols-12 gap-4">
			<div className={classNames(def, "col-span-2")}>
				<button onClick={() => console.log("prev")} className="absolute top-[43%] left-[10%]">
					<svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
			<div className={classNames(def, "col-span-8", "grid md:grid-cols-5 lg:grid-cols-10 p-4")}>
				<div
					className={classNames(
						"md:col-span-3 lg:col-span-7 xl:col-span-8",
						"w-full flex flex-col gap-8 p-4"
					)}
				>
					<div>
						<div className="flex items-center gap-4">
							<h1 className="text-[28px]">Film: Super Long Title Film</h1>
							<p className="mt-3 text-dark-600">2023</p>
						</div>
						<p className="text-[17px] text-dark-600">Film: Title Film (other lang)</p>
					</div>
					<ul className="flex gap-2 text-[14px]">
						{genres.map((genre) => (
							<li key={genre}>{genre}</li>
						))}
					</ul>
					<div className="flex gap-4 items-end">
						<div className="h-[100px] aspect-square">
							<CircularProgressbar
								value={rating}
								text={rating / 10}
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
							<div className="flex items-center gap-3">
								<p>Rating MIXFILM: </p>
								<div className="flex gap-[2px] cursor-pointer">
									{Array.from({ length: 10 }).map((_, index) => (
										<svg
											key={index}
											width="20"
											height="20"
											viewBox="0 0 15 15"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
												fill="#ebbd34"
											></path>
										</svg>
									))}
								</div>
							</div>
							<div className="flex gap-1">
								<p>Rating IMDb: 7.4</p>
								<div className="flex items-center justify-center">
									<svg
										width="15"
										height="15"
										viewBox="0 0 15 15"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
											fill="currentColor"
										></path>
									</svg>
								</div>
								<p>MIXFILM: 7.4</p>
							</div>
							<p>Comments:</p>
							<p>Country: United Kingdom</p>
						</div>
					</div>
				</div>
				<div className="md:col-span-2 lg:col-span-3 xl:col-span-2 bg-dark-300 overflow-hidden"></div>
			</div>
			<div className={classNames(def, "col-span-2")}>
				<button onClick={() => console.log("next")} className="absolute top-[43%] right-[10%]">
					<svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default SliderComponent;
