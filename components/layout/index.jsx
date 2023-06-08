const Layout = ({ children }) => {
	return (
		<div className="text-white flex justify-center min-h-screen p-4 bg-dark-200">
			<div className="flex lg:w-full 2xl:w-[70%]">{children}</div>
		</div>
	);
};

export default Layout;
