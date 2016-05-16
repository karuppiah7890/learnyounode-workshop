var http = require('http');
var url = require('url');

var server = http.createServer(function(request,response){

    var urlInfo = url.parse(request.url,true);

    response.writeHead(200,{'content-type' : 'application/json'});

    switch(urlInfo.pathname) {
      case '/api/parsetime' :
                                  if(urlInfo.query.iso!==undefined)
                                  {
                                      var date = new Date(urlInfo.query.iso);

                                      var result = {};

                                      result.hour = date.getHours();
                                      result.minute = date.getMinutes();
                                      result.second = date.getSeconds();

                                      response.end(JSON.stringify(result));
                                  }

                                  break;

      case '/api/unixtime' :
                                  if(urlInfo.query.iso!==undefined)
                                  {
                                      var date = new Date(urlInfo.query.iso);

                                      var result = {};

                                      result.unixtime = date.getTime();

                                      response.end(JSON.stringify(result));
                                  }

                                  break;

      default :
                  response.end(JSON.stringify({'Error' : 'Bad Request'}));
                  break;
    }


});

server.listen(Number(process.argv[2]));
