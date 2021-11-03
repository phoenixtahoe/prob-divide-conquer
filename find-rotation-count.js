function findRotationCount(arr, high = arr.length - 1, low = 0) {
	if (high === low) {
		return low;
	} else if (high < low) {
		return 0;
	}

	let mid = Math.floor((high + low) / 2);

	if (mid > low && arr[mid] < arr[mid - 1]) {
		return mid;
	} else if (mid < high && arr[mid] > arr[mid + 1]) {
		return mid + 1;
	} else if (arr[high] > arr[mid]) {
		return findRotationCount(arr, mid - 1, low);
	} else {
		return findRotationCount(arr, high, mid + 1);
	}
}

module.exports = findRotationCount;
