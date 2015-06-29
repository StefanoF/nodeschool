var fs = require('fs');
var file = process.argv[2];
var codifica = 'utf8';

var callback = function (err, fileContents) {
	if(err){
		return console.error(err);
	}

  var myNumber = fileContents.split('\n').length-1;
  console.log(myNumber);
};

fs.readFile(file, codifica, callback);