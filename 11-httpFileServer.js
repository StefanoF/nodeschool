var fs = require('fs');
var http = require('http');
var port = Number(process.argv[2]);
var file = process.argv[3];

var server = http.createServer(function(request, response){

	//response.writeHead(200, { 'content-type': 'text/plain' })

	var fileReaded = fs.createReadStream(file);
	fileReaded.pipe(response);
});
server.listen(port);
