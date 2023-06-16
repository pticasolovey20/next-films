import { useEffect, useState } from "react";

export const useMediaQuery = (minWidth) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);

		const handleChange = (event) => setMatches(event.matches);

		mediaQuery.addEventListener("change", handleChange);
		setMatches(mediaQuery.matches);

		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [minWidth]);

	return matches;
};
