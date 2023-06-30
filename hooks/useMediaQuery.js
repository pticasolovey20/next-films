"use client";

import "client-only";

import { useState, useEffect } from "react";

// param is the type of query, it can be 'min-width' or 'max-width', [type: string]

export const useMediaQuery = (param, value) => {
	const [matches, setMatches] = useState(false);
	const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

	useEffect(() => {
		const handleResize = () => setWidth(typeof window !== "undefined" ? window.innerWidth : 0);

		if (typeof window !== "undefined") {
			const mediaQuery = window.matchMedia(`(${param}: ${value}px)`);
			const handleChange = (event) => setMatches(event.matches);

			handleResize();
			setMatches(mediaQuery.matches);

			window.addEventListener("resize", handleResize);
			mediaQuery.addEventListener("change", handleChange);

			return () => {
				window.removeEventListener("resize", handleResize);
				mediaQuery.removeEventListener("change", handleChange);
			};
		}
	}, [param, value]);

	return { matches, width };
};
