var net = require('net');
// npm install strftime
var strftime = require('strftime');

var server = net.createServer(function (socket) {
	
  var date = new Date();
  var format = '%Y-%m-%d %H:%M';

 	var data = strftime(format, date);
  //var data = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
  socket.write(data);
  socket.write('\n');
  socket.end();
  //alternative
  //socket.end(data+'\n');
});

server.listen(Number(process.argv[2]));