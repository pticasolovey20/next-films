import { useSession, signIn } from "next-auth/react";

const Layout = ({ children }) => {
	const { data: session } = useSession();

	if (!session) {
		return (
			<div className="text-white flex min-h-screen items-center bg-dark-200">
				<div className="text-center w-full">
					<button className="px-3 py-1 rounded-md bg-dark-300" onClick={() => signIn("google")}>
						Login with Google
					</button>
				</div>
			</div>
		);
	}

	return <div className="text-white flex min-h-screen bg-dark-200">{children}</div>;
};

export default Layout;
