function findFloor(arr, num, high = arr.length - 1, low = 0) {
    if (high < low) {
        return -1
    } else if (arr[high] <= num) {
        return arr[high]
    } else {
        let mid = Math.floor((high + low) / 2)
        if (num === arr[mid]) {
            return arr[mid]
        } else if (mid > 0 && num >= arr[mid - 1] && num < arr[mid]) {
            return arr[mid - 1]
        } else if (arr[mid] > num) {
            return (findFloor(arr, num, mid - 1, low))
        } else {
            return (findFloor(arr, num, high, mid + 1))
        }
    }
}

module.exports = findFloor