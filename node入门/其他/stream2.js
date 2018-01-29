var fs = require("fs");
var zlib = require("zlib"); 

fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())       //压缩
  .pipe(fs.createWriteStream("input.txt.gz"));

console.log("end .");