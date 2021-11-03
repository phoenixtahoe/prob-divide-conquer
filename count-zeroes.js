function countZeroes(arr) {
	let zeroPos = findFirstZero(arr);
	if (zeroPos === -1) {
		return 0;
	} else {
		return arr.length - zeroPos;
	}
}

function findFirstZero(arr, high = arr.length - 1, low = 0) {
	if (high >= low) {
		let mid = low + Math.floor((high - low) / 2);
		if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
			return mid;
		} else if (arr[mid] === 1) {
			return findFirstZero(arr, high, mid + 1);
		}
		return findFirstZero(arr, mid - 1, low);
	}
	return -1;
}

module.exports = countZeroes;
