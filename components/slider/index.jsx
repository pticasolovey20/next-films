import { classNames } from "@/utils";

const def = "h-[350px] bg-dark-100 shadow-sm shadow-black/75";
const genres = ["Genre 1 |", "Genre 2 |", "Genre 3 |", "Genre 4 |", "Genre 5"];

const SliderComponent = () => {
	return (
		<div className="absolute w-full grid grid-cols-12 gap-4">
			<div className={classNames(def, "col-span-2")}></div>
			<div className={classNames(def, "col-span-8", "grid md:grid-cols-5 lg:grid-cols-10 p-4")}>
				<div
					className={classNames(
						"md:col-span-3 lg:col-span-7 xl:col-span-8",
						"w-full flex flex-col gap-6 p-4"
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
					<div></div>
				</div>
				<div className="md:col-span-2 lg:col-span-3 xl:col-span-2 bg-dark-300 overflow-hidden"></div>
			</div>
			<div className={classNames(def, "col-span-2")}></div>
		</div>
	);
};

export default SliderComponent;
