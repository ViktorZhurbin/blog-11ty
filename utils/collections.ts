export const sortAlphabetically = (strings: string[] = []) => {
	return strings.sort((b, a) => b.localeCompare(a));
};
