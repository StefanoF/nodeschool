var fs = require('fs');
var path = require('path');

module.exports = function(dir, filterStr, callback){

	fs.readdir(dir, function(err, data){
		if (err){
    	return callback(err);
		}

		var filteredBy = '.'+filterStr;

		data = data.filter(function(singleFile){
			return path.extname(singleFile) == filteredBy;
		});
		// equivalent solution:
		// var arrayfiles = [];
		// for(var i = 0; i<data.length; i++){

		// 	if(path.extname(data[i])==filteredBy){
		// 		arrayfiles.push(data[i]);
		// 	}
		// }

		return callback(null, data);
	});
};
