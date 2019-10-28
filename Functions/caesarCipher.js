
export default (string, key) => {
	const map = 'abcdefghijklmnopqrstuvwxyz'.split("");
	let result = '';
	for (let char of string.toLowerCase()) {

		if (char === ' '){
			result += char
		} else {
			result += map[(map.indexOf(char) + key) % (map.length)]
		}

	}
	return result;
}