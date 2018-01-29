var fs = require("fs");
var zlib = require("zlib"); 

fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGunzip())     //解压
  .pipe(fs.createWriteStream("input2.txt"));

console.log("end .");