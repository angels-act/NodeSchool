var url = process.argv[2];
var http = require('http');
var bl = require('bl')

http.get(url, function(res) {
    res.pipe(bl(function(err, data) {
        if (err) {
            console.log(err);
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }));
}).on('error', function(err) {
    console.log("Error: " + err.message);
});
