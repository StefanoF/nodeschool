var http = require('http');
var url = require('url');
var port = Number(process.argv[2]);

var server = http.createServer(function(request, response){

	var properties = url.parse(request.url, true);
	var date = new Date(properties.query.iso);
	var result;

	switch(properties.pathname){
		case '/api/parsetime':
			result = {
				hour: date.getHours(), 
				minute: date.getMinutes(),
				second: date.getSeconds()
			};
		break;

		case '/api/unixtime':
			result = {
				unixtime: date.getTime()
			};
		break;
	}

	if (result) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		response.write(JSON.stringify(result));
		response.end();

  } else {
    res.writeHead(404)
    res.end()
  }
});

server.listen(port);