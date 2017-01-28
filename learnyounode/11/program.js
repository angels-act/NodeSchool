var portNumber = process.argv[2];
var filePath = process.argv[3];

var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
	fs.createReadStream(filePath).pipe(res);
});
server.listen(portNumber);
