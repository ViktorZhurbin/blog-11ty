import { DateTime } from "luxon";

export const getHtmlDateString = (date: Date) => {
	return DateTime.fromJSDate(date, { zone: "utc" }).toFormat("yyyy-LL-dd");
};

export const getReadableDate = (params: {
	date: Date;
	format?: string;
	zone?: string;
}) => {
	// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
	const { date, format = "dd LLLL yyyy", zone = "utc" } = params;

	return DateTime.fromJSDate(date, { zone }).toFormat(format);
};
