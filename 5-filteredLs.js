var fs = require('fs');
var path = require('path');
var file = process.argv[2];
var filteredBy = '.'+process.argv[3];

var callback = function(err, fileContents){
	if(err){
		return console.error(err);
	}

	for(var i = 0; i<fileContents.length; i++){

		if(path.extname(fileContents[i])==filteredBy){
			console.log(fileContents[i]);
		}

	}
}

fs.readdir(file, callback);