var http = require('http');
// npm install bl
var bl = require('bl');

var results = [];
var counter = 0;

var printOut = function(){
	results.forEach(function (result) {
    console.log(result);
  });
};

var httpGet = function(index) {

  http.get(process.argv[index + 2], function (response) {

    response.pipe(bl(function (err, data) {
      if (err){
        return console.error(err);
      }

      results[index] = data.toString();
      counter++;

      if (counter == 3){
        printOut();
      }
    }));

  });
};

for (var i = 0; i < 3; i++){
  httpGet(i);
}

