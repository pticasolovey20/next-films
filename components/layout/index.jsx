import { useRouter } from "next/router";
import { useMedia } from "use-media";
import SliderComponent from "../slider";

const Layout = ({ children }) => {
	const { pathname } = useRouter();
	const isScreen = useMedia({ minWidth: "539px" });
	const isWide = useMedia({ minWidth: "590px" });

	return (
		<>
			{isScreen ? (
				<div className="text-white flex flex-col items-center min-h-screen p-4 bg-dark-200">
					{pathname === "/" && <SliderComponent />}
					<div className={`lg:w-full 2xl:w-[80%] ${pathname === "/" && isWide ? "mt-[375px]" : "mt-0"}`}>
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
