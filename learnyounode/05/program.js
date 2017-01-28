var dirPath = process.argv[2];
var extention = process.argv[3];

var fs = require('fs');
var path = require('path');

fs.readdir(dirPath, function(err, list) {
    if (err) {
        console.log(err);
        return;
    }

    for(var i=0; i < list.length; i++) {
        if (extention === path.extname(list[i]).substr(1)) {
            console.log(list[i]);
        }
    }
});
