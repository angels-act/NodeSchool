module.exports = function reduce(arr, fn, initial) {
    var value = initial;
    for (var i = 0; i < arr.length; i++) {
        value = fn(value, arr[i], i, arr);
        if (i == (arr.length - 1)) {
            return value;
        }
    }
}
