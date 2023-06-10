import { useRouter } from "next/router";
import SliderComponent from "../slider";

const Layout = ({ children }) => {
	const { pathname } = useRouter();

	return (
		<div className="text-white flex flex-col items-center min-h-screen p-4 bg-dark-200">
			{pathname === "/" && <SliderComponent />}
			<div className="mt-[380px] lg:w-full 2xl:w-[80%]">{children}</div>
		</div>
	);
};

export default Layout;
