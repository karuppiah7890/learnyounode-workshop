var http = require('http');

module.exports = {

	getAllData : function(url,callback) {

					var flag = 0;
					var allData = "";

					http.get(url,function(response){

						response.setEncoding('UTF-8');

						response.on('error',function(err){
							flag = 1;
							return callback(err);
						});

						response.on('data',function(data){
							if(flag==0)
								allData+=data;

							else
								return;
						});

						response.on('end',function(data){
							if(flag==0)
								return callback(null,allData);

							else
								return;
						});

					}).on('error',function(err){
						return callback(err);
					});

				}

};