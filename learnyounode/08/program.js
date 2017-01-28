var url = process.argv[2];
var http = require('http');

http.get(url, function(res) {
    var body = "";
    res.setEncoding('utf8');

    res.on('data', function(chunk) {
        body += chunk;
    });

    res.on('end', function(res) {
        console.log(body.length);
        console.log(body);
    });

}).on('error', function(err) {
    console.log("Error: " + err.message);
});
