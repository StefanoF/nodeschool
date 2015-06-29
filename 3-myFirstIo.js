var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]); // or fs.readFileSync(process.argv[2], 'utf8');
var countN = buf.toString().split('\n').length-1;
console.log(countN);