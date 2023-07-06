import React from "react";
import { useForm } from "react-hook-form";

import Link from "next/link";
import InputComponent from "../input";

const Header = () => {
	const { handleSubmit, register } = useForm({ mode: "onChange" });

	const onSumbit = (data) => console.log(data);

	return (
		<header className="fixed w-full flex justify-center bg-dark-100 z-10 select-none">
			<div className="w-full 2xl:w-[70%] p-4 flex justify-between items-center">
				<Link href="/" className="text-2xl font-semibold">
					NextFILM
				</Link>
				<form onSubmit={handleSubmit(onSumbit)}>
					<InputComponent name="search" register={register} type="text" placeholder="Search..." />
				</form>
			</div>
		</header>
	);
};

export default Header;
