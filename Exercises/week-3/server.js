var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');
// build a server that can server files from the public directory




var server = http.createServer(function (req, res) {
    var uri = '/public'+url.parse(req.url).pathname;
    var dir = process.cwd();
    var filename = path.join(dir,uri);
    console.log(filename);
    
    fs.exists(filename, function (exists) {
      if(exists) {
        fs.readFile(filename,(err,file)=>{
           if(err)
            {
                res.writeHead(500,{'Content-Type':'text/plain'});
                res.end();
            }
            else
            {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(file);
            }
        });
      } else {
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Sorry this file does not exist');
      }
    });
});
   
   
   
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    var addr = server.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});
