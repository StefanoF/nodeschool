var filterFn = require('./6-makeItModularExternal.js');
var dir = process.argv[2]
var filterStr = process.argv[3]

var callback = function (err, data) {
  if (err){
    return console.error(err); // early return
  }
  data.forEach(function (singleFile) {
    console.log(singleFile);
  });
};

filterFn(dir, filterStr, callback);