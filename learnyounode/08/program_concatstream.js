var url = process.argv[2];
var http = require('http');
var concatStream = require('concat-stream')

http.get(url, function(res) {
    res.pipe(concatStream(function(data) {
        console.log(data.toString().length);
        console.log(data.toString());
    }));
}).on('error', function(err) {
    console.log("Error: " + err.message);
});
