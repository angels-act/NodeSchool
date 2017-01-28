var portNumber = process.argv[2];
var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var pathName = url.parse(req.url).pathname;
    var date = new Date(url.parse(req.url).query.split("=")[1]);
    var output;
    var result = false;

    if (pathName == "/api/parsetime") {
        output = { hour : date.getHours(), minute : date.getMinutes(), second : date.getSeconds() };
        result = true;
    }

    if (pathName == "/api/unixtime") {
        output = { unixtime : date.getTime() };
        result = true;
    }

    if (result) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(output, undefined, 1));
    } else {
        res.writeHead(500, {'Content-Type': 'application/json'});
        res.end("internal server error");
    }
});
server.listen(portNumber);
