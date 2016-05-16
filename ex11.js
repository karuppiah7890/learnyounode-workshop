var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request,response){

    response.writeHead(200,{'Content-Type' : 'text/plain'});

    var fileStream = fs.createReadStream(process.argv[3]);

    fileStream.pipe(response);

});

fs.stat(process.argv[3],function(err,stats){

      if(err)
        return console.log(err.toString());

      server.listen(process.argv[2]);  
});
