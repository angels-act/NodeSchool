var checkUsersValid = require('./checkUsersValid.js');

var goodUsers = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
]

var testAllValid = checkUsersValid(goodUsers);

// true
var result = testAllValid([
    { id: 1 },
    { id: 2 }
])

// false
// var result = testAllValid([
//     { id: 1 },
//     { id: 7 }
// ])

console.log(result);
