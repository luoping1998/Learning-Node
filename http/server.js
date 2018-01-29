const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
  var file_name = '.' + req.url;
  fs.readFile(file_name ,function(err, data) {
    if(err) {
      res.write('404');
    }else {
      res.write(data);
    }
  res.end();
  })
}).listen(8080);

console.log('Server is running on port:8080');
