var fs = require('fs');

var content = fs.readFileSync(process.argv[2]);

var string = content.toString();

var lineCounter = string.split('\n');

console.log(lineCounter.length-1);

// length