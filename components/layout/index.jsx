import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useMediaQuery } from "@/hooks/useMediaQuery";

import TopSliderComponent from "../top-slider";
import Header from "../header";
import Image from "next/image";
import Footer from "../footer";
import { classNames } from "@/utils";

const Layout = ({ children }) => {
	const { pathname } = useRouter();

	const { matches: screnMatch } = useMediaQuery("min-width", 539);
	const { matches: caruselVis } = useMediaQuery("min-width", 590);

	return (
		<React.Fragment>
			<Head>
				<title>NextFILM | @pticasolovey20</title>
			</Head>
			{screnMatch ? (
				<div className="text-white flex flex-col items-center min-h-screen bg-dark-200">
					<Header />
					{pathname === "/" && <TopSliderComponent />}
					<main
						className={classNames(
							"w-full 2xl:w-[70%] p-4 flex-1",
							pathname === "/" && caruselVis ? "mt-[445px]" : "mt-8"
						)}
					>
						{children}
					</main>
					<Footer />
				</div>
			) : (
				<div className="text-white flex flex-col items-center justify-center min-h-screen p-4 bg-dark-200">
					<Image
						className="aspect-square"
						src="/rotate_device.png"
						alt="rotate_device"
						width={200}
						height={200}
					/>
					<p className="text-center text-[20px] p-6">
						You should rotate the screen or find devices with a larger screen resolution for a better
						experience
					</p>
				</div>
			)}
		</React.Fragment>
	);
};

export default Layout;
