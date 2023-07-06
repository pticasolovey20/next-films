import React from "react";
import Link from "next/link";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="w-full flex justify-center bg-[#0e0e11] select-none">
			<div className="w-full 2xl:w-[70%] py-4 px-4 2xl:px-8  flex justify-between items-center">
				<p className="text-[20px]">© {year} NextFILM</p>
				<span className="text-sm text-dark-600 ml-8">
					made by{" "}
					<Link
						href="https://github.com/pticasolovey20"
						target="_blank"
						className="text-[18px] hover:text-gray-200"
					>
						@pticasolovey20
					</Link>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
