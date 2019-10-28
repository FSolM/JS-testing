
export default (string, key = 0) => {
	const map = 'abcdefghijklmnopqrstuvwxyz'.split('');
	let result = '';
	for (let char of string.toLowerCase()) {
		if (char === ' ') {
      result += ' ';
      continue;
    }
		result += map[(map.indexOf(char) + key) % (map.length)]
	}
	return result;
}
