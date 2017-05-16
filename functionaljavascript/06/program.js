var countWords = require('./countWords.js');

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
    
// =>
// {
//   Apple: 2,
//   Banana: 1,
//   Durian: 3
// }

console.log(countWords(inputWords));
