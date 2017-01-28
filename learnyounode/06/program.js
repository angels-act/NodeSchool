var dirPath = process.argv[2];
var extention = process.argv[3];

var myModule = require('./module.js');

myModule(dirPath, extention, function(err, list) {
    if (err) {
        console.log(err);
        return;
    }

    for(var i=0; i < list.length; i++) {
        console.log(list[i]);
    }
});
