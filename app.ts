//var http = require('http');
//var fs = require('fs');


//http.createServer(function (req, res) {
    
    //fs.readFile('index.html', function (err, data) {
    //    res.writeHead(200, { 'Content-Type': 'text/html', 'Content-Length': data.length });
    //    res.write(data);
    //    res.end();
    //});
//}).listen(8000);



var http = require('http');
var fs = require('fs');
var PORT = 8080;

http.createServer((req, res) => {
    fs.readFile('./' + req.url, (err, data) => {
        if (!err) {
            var dotoffset = req.url.lastIndexOf('.');
            var mimetype = dotoffset == -1 ? 'text/plaint' : {
                '.html': 'text/html',
                '.css': 'text/css',
                '.js': 'text/javascript',
                '.jpg': 'image/jpeg',
                '.png': 'image/png',
                '.ico': 'image/x-icon',
                '.gif': 'image/gif'
            }[req.url.substr(dotoffset)];
            res.setHeader('Content-Type', mimetype);
            res.end(data);
            console.log(req.url, mimetype);
        } else {
            console.log('File not fount: ' + req.url);
            res.writeHead(404, "Not Found");
            res.end();
        }
       
    });

}).listen(PORT);