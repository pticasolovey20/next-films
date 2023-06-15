import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SliderComponent from "../slider";

const Layout = ({ children }) => {
	const { pathname } = useRouter();

	const [hidden, setHidden] = useState(false);
	const [wide, setWide] = useState(false);

	useEffect(() => {
		const mediaQueryHidden = window.matchMedia("(min-width: 539px)");
		const mediaQueryWide = window.matchMedia("(min-width: 590px)");

		const handleMediaChange = (event) => {
			setHidden(event.matches);
			setWide(event.matches);
		};

		mediaQueryHidden.addEventListener("change", handleMediaChange);
		mediaQueryWide.addEventListener("change", handleMediaChange);

		setHidden(mediaQueryHidden.matches);
		setWide(mediaQueryWide.matches);

		return () => {
			mediaQueryHidden.removeEventListener("change", handleMediaChange);
			mediaQueryWide.removeEventListener("change", handleMediaChange);
		};
	}, []);

	return (
		<>
			{hidden ? (
				<div className="text-white flex flex-col items-center min-h-screen p-4 bg-dark-200">
					{pathname === "/" && <SliderComponent />}
					<div className={`lg:w-full 2xl:w-[80%] ${pathname === "/" && wide ? "mt-[375px]" : "mt-0"}`}>
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
