var http = require('http');
var static = require('node-static');
var file = new(static.Server)('.');

// HTTP static files.
var httpPort = 1337;
var serv = http.createServer(function (req, res) {
    console.log('Processing a HTTP request',req.method,req.url);
    req.addListener('end', function () {
    // Serve files!
        file.serve(req, res);
    });
    console.log('Returning a HTTP response',res.statusCode);
}).listen(httpPort);
console.log('HTTP Server on ',httpPort);
