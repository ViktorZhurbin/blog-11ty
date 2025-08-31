export const getBaseUrl = (url: string, base: string): string => {
	try {
		return new URL(url, base).href;
	} catch {
		return url;
	}
};
