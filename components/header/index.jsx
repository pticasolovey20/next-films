import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import Link from "next/link";
import InputComponent from "../input";
import NextArrowIcon from "../icons/NextArrowIcon";

const Header = () => {
	const { asPath } = useRouter();
	const { register } = useForm({ mode: "onChange" });

	const { movieDetails, serialDetails } = useSelector((state) => state.dataReducer);

	return (
		<header className="fixed w-full flex justify-center bg-[#0e0e11] z-10 select-none">
			<div className="w-full 2xl:w-[70%] p-4 flex justify-between items-center">
				<div className="flex items-center">
					<Link href="/" className="text-2xl font-semibold">
						NextFILM
					</Link>
					{asPath !== "/" && (
						<div className="flex items-center gap-1 text-lg leading-8 text-dark-600">
							<NextArrowIcon h="20" w="20" />
							{asPath === "/movies" ? (
								<p>movies</p>
							) : asPath === "/serials" ? (
								<p>serials</p>
							) : (
								<React.Fragment>
									{asPath.includes("/movies/") ? (
										<React.Fragment>
											<Link href="/movies" className="hover:text-white">
												movies
											</Link>
											<NextArrowIcon h="20" w="20" />
											<p className="max-w-[80%] truncate">{movieDetails?.title}</p>
										</React.Fragment>
									) : asPath.includes("/serials/") ? (
										<React.Fragment>
											<Link href="/serials" className="hover:text-white">
												serials
											</Link>
											<NextArrowIcon h="20" w="20" />
											<p className="max-w-[80%] truncate">{serialDetails?.name}</p>
										</React.Fragment>
									) : null}
								</React.Fragment>
							)}
						</div>
					)}
				</div>

				{asPath === "/movies" ? (
					<InputComponent name="search" register={register} type="text" placeholder="Search..." />
				) : asPath === "/serials" ? (
					<InputComponent name="search" register={register} type="text" placeholder="Search..." />
				) : null}
			</div>
		</header>
	);
};

export default Header;
