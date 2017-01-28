var filePath = process.argv[2];
var fs = require('fs');

fs.readFile(filePath, 'utf8', function(err, str) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(str.split('\n').length - 1);
});
