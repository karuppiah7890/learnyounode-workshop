var http = require('http');

if(process.argv.length > 2) {

	http.get(process.argv[2],function(response){

		response.setEncoding('UTF-8');

		response.on('data',function(data){
			console.log(data);
		});

	});
}

else
	console.log('');