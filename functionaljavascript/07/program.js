var reduce = require('./reduce.js');

var sum = reduce([1,2,3], function(prev, curr, index, arr) {
        return prev + curr
        }, 0)
    
console.log(sum);
