export const filterTagList = (tags: string[] = []) => {
	return tags.filter((tag) => !["all", "posts"].includes(tag));
};
