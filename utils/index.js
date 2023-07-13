export const classNames = (...classes) => {
	return classes.filter(Boolean).join(" ");
};

export const convertRuntime = (minutes) => {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;

	return `${hours}h ${remainingMinutes}min`;
};
