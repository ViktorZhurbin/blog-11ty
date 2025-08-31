export const getPreviousCollectionItem = (collection, page) => {
	return getCollectionItem(collection, page, -1);
}

export const getNextCollectionItem = (collection, page) => {
	return getCollectionItem(collection, page, 1);
}

function getCollectionItem(collection, page, modifier = 0) {
	let j = 0;
	let index;
	for (let item of collection) {
		if (
			item.inputPath === page.inputPath &&
			(item.outputPath === page.outputPath || item.url === page.url)
		) {
			index = j;
			break;
		}
		j++;
	}

	if (index !== undefined && collection?.length) {
		if (index + modifier >= 0 && index + modifier < collection.length) {
			return collection[index + modifier];
		}
	}
}
