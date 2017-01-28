module.exports = function (dirPath, extention, callBackFunc) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dirPath, function(err, list) {
        if (err) {
            callBackFunc(err);
            return;
        }
    
        var targetList = new Array();
        for(var i=0; i < list.length; i++) {
            if (extention === path.extname(list[i]).substr(1)) {
                targetList.push(list[i]);
            }
        }
        callBackFunc(null, targetList);
    });
}
