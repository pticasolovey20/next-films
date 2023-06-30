"use client";

import { useRouter } from "next/router";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import SliderComponent from "../slider";
import { classNames } from "@/utils";

const Layout = ({ children }) => {
	const { pathname } = useRouter();

	const { matches: screnMatch } = useMediaQuery("min-width", 539);
	const { matches: caruselVis } = useMediaQuery("min-width", 590);

	return (
		<>
			{screnMatch ? (
				<div className="text-white flex flex-col items-center min-h-screen p-4 bg-dark-200">
					{pathname === "/" && <SliderComponent />}
					<div
						className={classNames(
							"lg:w-full 2xl:w-[80%]",
							pathname === "/" && caruselVis ? "mt-[375px]" : "mt-0"
						)}
					>
						{children}
					</div>
				</div>
			) : (
				<div className="text-white flex flex-col items-center justify-center min-h-screen p-4 bg-dark-200">
					<img className="h-[150px] aspect-square" src="/rotate_device.png" alt="rotate_device" />
					<p className="text-center text-[20px] p-6">
						You should rotate the screen or find devices with a larger screen resolution for a better
						experience
					</p>
				</div>
			)}
		</>
	);
};

export default Layout;
