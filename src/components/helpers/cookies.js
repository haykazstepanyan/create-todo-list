export const getCookies = (name) => {
	let matches = document.cookie.match(
		new RegExp(
			"(?:^|; )" + name.replace(/([.$?*|{}()[]\\\/\+^])/g, "\\$1") + "=([^;]*)"
		)
	);
	console.log(matches);
	return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookies = (name, value, options = {}) => {
	options = {
		path: "/",
		...options,
	};
	let newCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		newCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			newCookie += "=" + optionValue;
		}
	}

	document.cookie = newCookie;
};

export const deleteCookies = (name) => {
	setCookies(name, "", {
		"max-age": -1,
	});
};
