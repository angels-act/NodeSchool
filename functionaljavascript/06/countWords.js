module.exports = function countWords(inputWords) {
    // answer : reduce�����������{}����ꤹ�뤳�Ȥ�1���ܤ�countMap��{}�ˤʤ�word�������1�����ܤ��Ϥ����
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
