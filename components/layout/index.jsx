const Layout = ({ children }) => {
	return (
		<div className="text-white flex flex-col items-center min-h-screen p-4 bg-dark-200">
			<div className="lg:w-full 2xl:w-[80%]">{children}</div>
		</div>
	);
};

export default Layout;
