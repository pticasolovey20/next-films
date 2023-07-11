import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import Link from "next/link";
import InputComponent from "../input";
import NextArrowIcon from "../icons/NextArrowIcon";

const Header = () => {
	const { pathname } = useRouter();
	const { register } = useForm({ mode: "onChange" });

	return (
		<header className="fixed w-full flex justify-center bg-[#0e0e11] z-10 select-none">
			<div className="w-full 2xl:w-[70%] p-4 flex justify-between items-center">
				<div className="flex items-center">
					<Link href="/" className="text-2xl font-semibold">
						NextFILM
					</Link>
					{pathname !== "/" && (
						<div className="flex items-center gap-1">
							<NextArrowIcon h="20" w="20" />
							{pathname.slice(1)}
						</div>
					)}
				</div>

				{pathname !== "/" && (
					<InputComponent name="search" register={register} type="text" placeholder="Search..." />
				)}
			</div>
		</header>
	);
};

export default Header;
