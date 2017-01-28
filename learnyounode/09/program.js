var url = new Array();
for (var i = 2; i < process.argv.length; i++) {
    url.push(process.argv[i]);
}
var urlCount = process.argv.length - 2;

var http = require('http');
var bl = require('bl')

function execGetRequest(url, number, resultBack) {
    http.get(url, function(res) {
        res.pipe(bl(function(err, data) {
            if (err) {
                resultBack("get request error : " + err.message, number);
            }
            resultBack(data.toString(), number);
        }));
    }).on('error', function(err) {
        resultBack("get request error : " + err.message, number);
    });
}

function outputControl(callback) {
    var count = 0;
    var result = new Array();

    for(i = 0; i < urlCount; i++){
        execGetRequest(url[i], i, function(data, number) {
            count++;
            result[number] = data;
            if (count == urlCount) {
                callback(result);
            }
        });
    }
}

outputControl(function(data) {
    for (i = 0; i < urlCount; i++) {
        console.log(data[i]);
    }
})
