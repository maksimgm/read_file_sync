// Using read file sync

// var fs = require('fs');

// var content = fs.readFileSync(process.argv[2]);

// var string = content.toString();

// var lineCounter = string.split('\n');

// console.log(lineCounter.length-1);


// Using read file

var fs = require('fs');

var content = fs.readFile(process.argv[2], "utf8",function(error,data){

console.log(data.split('\n').length-1);

});

