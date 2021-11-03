function sortedFrequency(arr, num) {
	let firstIdx = findFirst(arr, num);

	if (firstIdx == -1) {
		return firstIdx;
	} else {
		let lastIdx = findLast(arr, num);
		return lastIdx - firstIdx + 1;
	}
}

function findFirst(arr, num, high = arr.length - 1, low = 0) {
	if (high >= low) {
		let mid = Math.floor((high + low) / 2);
		if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
			return mid;
		} else if (num > arr[mid]) {
			return findFirst(arr, num, high, mid + 1);
		} else {
			return findFirst(arr, num, mid - 1, low);
		}
	}
	return -1;
}

function findLast(arr, num, high = arr.length - 1, low = 0) {
	if (high >= low) {
		let mid = Math.floor((high + low) / 2);
		if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
			return mid;
		} else if (num < arr[mid]) {
			return findLast(arr, num, mid - 1, low);
		} else {
			return findLast(arr, num, high, mid + 1);
		}
	}
	return -1;
}

module.exports = sortedFrequency;
