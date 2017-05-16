module.exports = function countWords(inputWords) {
    // answer : reduceの第二引数に{}を指定することで1回目のcountMapは{}になりwordは配列の1要素目が渡される
    // return inputWords.reduce(function(countMap, word) {
    //     countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
    //     return countMap
    // }, {}) // second argument to reduce initialises countMap to {}

    return inputWords.reduce(function(countObj, word) {
        if (countObj instanceof Object && !(countObj instanceof Array)) {
            if (word in countObj) {
                countObj[word] = countObj[word] + 1;
            } else {
                countObj[word] = 1;
            }
        } else {
            countObj = {[countObj] : 1, [word] : 1};
        }
        return countObj;
    });
}
