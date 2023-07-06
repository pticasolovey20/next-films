import React from "react";
import SeearchIcon from "../icons/SeearchIcon";
import { classNames } from "@/utils";

const InputComponent = ({ name, register, type, placeholder, styles, autoComplete = "off" }) => {
	return (
		<div className="flex items-center gap-3">
			<button type="submit">
				<SeearchIcon />
			</button>
			<input
				className={classNames(
					"px-4 py-1 rounded-md border-2 border-dark-400 bg-transparent",
					"focus:border-dark-400 focus:outline-none  focus:ring-0 ",
					styles
				)}
				name={name}
				{...register(name)}
				type={type}
				placeholder={placeholder}
				autoComplete={autoComplete}
			/>
		</div>
	);
};

export default InputComponent;
